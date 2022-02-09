import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FevoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly fevoritesService: FevoritesService) {}

  @Get()
  async getFavorites() {
    return await this.fevoritesService.getFavorites();
  }

  @Get(':id')
  async getRepoById(@Param('id') id: string) {
    return await this.fevoritesService.getFavoriteRepoById(id);
  }

  @Delete(':id')
  async deleteFavRepo(@Param('id') id: string) {
    return await this.fevoritesService.deleteFavoriteRepo(id);
  }

  @Post()
  async addToFavorites(
    @Body('repo_id') repoId: number,
    @Body('name') name: string,
    @Body('owner_login_name') owner: string,
    @Body('size') size: number,
  ) {
    return await this.fevoritesService.addNewFavorite(
      repoId,
      name,
      owner,
      size,
    );
  }
}
