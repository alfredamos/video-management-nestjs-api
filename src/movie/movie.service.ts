import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movie } from '@prisma/client';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class MovieService {
  constructor(private repo: PrismaService){}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const releaseDate = createMovieDto.releaseDate;
    if (typeof releaseDate === "string"){
      createMovieDto.releaseDate = new Date(releaseDate);
    }

    return await this.repo.movie.create({
      data: {...createMovieDto},
    });
  }

  async findAll(): Promise<Movie[]> {
    return await this.repo.movie.findMany({
      include: {
        genre: true,
      }
    });
  }

  async findOne(id: string): Promise<Movie> {
    const movie = await this.repo.movie.findUnique({
      where: {id},
      include: {
        genre: true,
      }
    })

    if (!movie){
      throw new NotFoundException(`Movie with id = ${id} is not found.`);
    }

    return movie;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.repo.movie.findUnique({
      where: {id},
      
    })

    if (!movie){
      throw new NotFoundException(`Movie with id = ${id} is not found.`);
    }

    const releaseDate = updateMovieDto.releaseDate;

    if (typeof releaseDate === "string"){
      updateMovieDto.releaseDate = new Date(releaseDate);
    }

    return await this.repo.movie.update({
      where: {id},
      data: {...updateMovieDto}
    });
  }

  async remove(id: string): Promise<Movie> {
    const movie = await this.repo.movie.findUnique({
      where: {id},
     
    })

    if (!movie){
      throw new NotFoundException(`Movie with id = ${id} is not found.`);
    }
    return await this.repo.movie.delete({
      where: {id}, 
    });
  }
}
