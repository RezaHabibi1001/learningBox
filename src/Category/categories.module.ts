import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModel } from './categories.model';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { Module } from '@nestjs/common';

// In this file we should import our mongodb model as schema
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Categories',
        schema: CategoryModel,
      },
    ]),
  ],
  providers: [CategoriesService, CategoriesResolver],
})
export class CategoryModule {}
