import { Module } from '@nestjs/common';
import { CineService } from './cine.service';
import { CineController } from './cine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cine } from './entities/cine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cine])],
  controllers: [CineController],
  providers: [CineService],
})
export class CineModule {}
