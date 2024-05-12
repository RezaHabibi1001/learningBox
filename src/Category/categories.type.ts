import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;
}

@InputType()
export class CreateCategoryInput {
  @Field()
  title: string;

  @Field()
  content: string;
}

@InputType()
export class UpdateCategoryInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  content?: string;
}
