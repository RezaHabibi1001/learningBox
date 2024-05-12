import * as mongoose from 'mongoose';

export const CategoryModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export interface ICategories extends mongoose.Document {
  title: string;
  content: string;
}
