import * as mongoose from 'mongoose';

export const FavoritesSchema = new mongoose.Schema({
  repo_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  owner_login_name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});

export interface Repository {
  id: number;
  repo_id: number;
  name: string;
  owner_login_name: string;
  size: number;
}
