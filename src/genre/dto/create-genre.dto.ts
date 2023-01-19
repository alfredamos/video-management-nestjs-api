import { IsString } from "class-validator";
import { IsNotEmpty } from "class-validator";

export class CreateGenreDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
