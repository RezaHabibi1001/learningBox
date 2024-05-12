import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICategories } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Categories')
    private readonly categoriesModel: Model<ICategories>,
  ) {}
  async createCategory(payload: CreateCategoryDto) {
    const createdCategory = new this.categoriesModel(payload);
    const result = await createdCategory.save();
    return result;
  }
  async getCategories() {
    const categories = await this.categoriesModel.find();
    return categories;
  }
  async getCategory(id: string) {
    const category = await this.categoriesModel.findById(id);
    return category;
  }
  async updateCategory(id: string, payload: UpdateCategoryDto) {
    const updatedCategory = await this.categoriesModel.findByIdAndUpdate(
      id,
      payload,
      {
        new: true,
      },
    );
    if (!updatedCategory) {
      throw new NotFoundException('Category not found');
    }
    return updatedCategory;
  }
  async deleteCategory(id: string) {
    const deletedCategory = await this.categoriesModel.findByIdAndDelete(id);
    return deletedCategory;
  }
}
