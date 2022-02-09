import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    FavoritesModule,
    // refacter to use .env
    MongooseModule.forRoot(
      `mongodb+srv://mpwanyi:Af2CA9iVQlDyeFaZ@restapiwithmongo.spews.mongodb.net/favorites?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
