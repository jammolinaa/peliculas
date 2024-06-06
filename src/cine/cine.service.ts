import { Injectable } from '@nestjs/common';
import { CreateCineDto } from './dto/create-cine.dto';
import { UpdateCineDto } from './dto/update-cine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cine } from './entities/cine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CineService {

  constructor(
    @InjectRepository(Cine)
    private readonly cineRepoaitory:Repository<Cine>
  ){}

   async create(createCineDto: CreateCineDto) {
    return await this.cineRepoaitory.save(createCineDto);
  }

  async findAll() {
    return await this.cineRepoaitory.find();
  }

  async findOne(id: number) {
    return await this.cineRepoaitory.findOneBy({id});
  }

  async update(id: number, updateCineDto: UpdateCineDto) {
    return await this.cineRepoaitory.update(id, updateCineDto);
  }

  async remove(id: number) {
    return await this.cineRepoaitory.delete(id);
  }
}
