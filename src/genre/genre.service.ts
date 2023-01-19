import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import {PrismaService} from '../prisma/prisma.service';
import { Genre } from '@prisma/client';
import { NotFoundException } from '@nestjs/common/exceptions';


@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService){}

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {

    return await this.prisma.genre.create({
      data: {...createGenreDto},
    });
  }

  async findAll(): Promise<Genre[]> {
    return await this.prisma.genre.findMany();
  }

  async findOne(id: string): Promise<Genre> {
    const genre = await this.prisma.genre.findUnique({
      where: {id},  
    })

    if (!genre) {
      throw new NotFoundException(`Genre with id = ${id} is not found`);
    }

    return genre;
  }

  async update(id: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    const genre = await this.prisma.genre.findUnique({
      where: {id},  
    })

    if (!genre) {
      throw new NotFoundException(`Genre with id = ${id} is not found`);
    }

    return await this.prisma.genre.update({
      where: {id},
      data: {...updateGenreDto},
    });
  }

  async remove(id: string): Promise<Genre> {
    const genre = await this.prisma.genre.findUnique({
      where: {id},  
    })

    if (!genre) {
      throw new NotFoundException(`Genre with id = ${id} is not found`);
    }

    return await this.prisma.genre.delete({
      where: {id}, 
    });
  }
}
