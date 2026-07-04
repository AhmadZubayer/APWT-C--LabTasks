import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(6)
  code: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  instructor: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  credits: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(150)
  @IsOptional()
  description: string;
}
