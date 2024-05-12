import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  content: string;
}
