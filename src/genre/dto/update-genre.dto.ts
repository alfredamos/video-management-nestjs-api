import { PartialType } from '@nestjs/mapped-types';
import { CreateGenreDto } from './create-genre.dto';
import { IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator/types/decorator/decorators';

export class UpdateGenreDto extends PartialType(CreateGenreDto) {
    @IsString()
    @IsNotEmpty()
    id: string;
}
