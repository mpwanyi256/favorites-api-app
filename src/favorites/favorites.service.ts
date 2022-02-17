import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from './favorite.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FevoritesService {
  private favoriteRepositories: Repository[] = [];

  constructor(
    @InjectModel('Favorite') private readonly favoritesModel: Model<Repository>,
  ) {}

  async getFavorites() {
    const favRepos = await this.favoritesModel.find().exec();
    return favRepos;
  }

  async getFavoriteRepoById(repoId: string) {
    const favRepo = await this.favoritesModel.findById(repoId).exec();

    if (!favRepo) {
      return new NotFoundException(
        'Sorry, no repo found that matches passed id',
      );
    }
    return favRepo;
  }

  async deleteFavoriteRepo(id: string) {
    const favRepo = await this.favoritesModel.findById(id).exec();

    if (!favRepo) {
      return new NotFoundException(
        'Sorry, no repo found that matches passed id',
      );
    }
    await this.favoritesModel.deleteOne({ id }).exec();
    return {
      deleted: true,
    };
  }

  async addNewFavorite(
    repo_id: number,
    name: string,
    owner: string,
    size: number,
  ) {
    const foundRepo = await this.favoritesModel.findOne({ repo_id }).exec();
    if (foundRepo) {
      return new NotAcceptableException('Sorry, Repo already favorited');
    }

    const newFavorite = new this.favoritesModel({
      repo_id,
      name,
      owner_login_name: owner,
      size,
    });

    const result = await newFavorite.save();
    return {
      added: true,
      repo: result,
    };
  }
}
