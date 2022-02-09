import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesSchema } from './favorite.model';
import { FavoritesController } from './favorites.controllers';
import { FevoritesService } from './favorites.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Favorite', schema: FavoritesSchema }]),
  ],
  controllers: [FavoritesController],
  providers: [FevoritesService],
})
export class FavoritesModule {}
