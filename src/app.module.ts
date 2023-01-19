import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GenreModule } from './genre/genre.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [PrismaModule, GenreModule, MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
