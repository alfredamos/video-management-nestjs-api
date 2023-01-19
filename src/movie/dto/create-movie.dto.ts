import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

enum Rating {
    Violence = "Violence",
    Family = "Family",
    Language = "Language",
    Sex = "Sex"
}


export class CreateMovieDto {   
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsNotEmpty()
    producer: string;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsString()
    @IsNotEmpty()
    youtubeId: string
    @IsNumber()
    @IsPositive()
    starsCount: number
    @IsOptional()
    @IsBoolean()
    isActive: boolean; // Optional
    @IsString()
    releaseDate: Date;
    @IsNumber()
    @IsPositive()
    genreId: string;
    @IsOptional()
    @IsEnum(Rating)
    pgRating: Rating; // Optional
}


