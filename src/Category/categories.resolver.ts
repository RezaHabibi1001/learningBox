import { CategoriesService } from './categories.service';
import { Query, Mutation, Args, Resolver, ID } from '@nestjs/graphql';
import {
  Category,
  CreateCategoryInput,
  UpdateCategoryInput,
} from './categories.type';
@Resolver()
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Mutation(() => Category)
  async createCategory(@Args('data') categoryData: CreateCategoryInput) {
    return this.categoriesService.createCategory(categoryData);
  }
  @Query(() => [Category])
  async getCategories() {
    return this.categoriesService.getCategories();
  }
  @Query(() => Category)
  async getCategory(@Args('id') id: string) {
    return this.categoriesService.getCategory(id);
  }
  @Mutation(() => Category)
  async updateCategory(
    @Args('id', { type: () => ID }) id: string, // Use ID type for id argument
    @Args('data') categoryData: UpdateCategoryInput,
  ) {
    return this.categoriesService.updateCategory(id, categoryData);
  }
  @Mutation(() => Category)
  async deleteCategory(@Args('id') id: string) {
    return this.categoriesService.deleteCategory(id);
  }
}
