import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    FavoritesModule,
    // refacter to use .env
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
