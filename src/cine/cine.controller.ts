import { Controller, Get, Post, Body, Param, Delete, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { CineService } from './cine.service';
import { CreateCineDto } from './dto/create-cine.dto';
import { UpdateCineDto } from './dto/update-cine.dto';

@Controller('cine')
@UsePipes(new ValidationPipe())

export class CineController {
  constructor(private readonly cineService: CineService) {}

  @Post()
  create(@Body() createCineDto: CreateCineDto) {
    const cine =  this.cineService.create(createCineDto);
    return cine;
  }

  @Get()
  findAll() {
    return this.cineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cineService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCineDto: UpdateCineDto) {
    return this.cineService.update(+id, updateCineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cineService.remove(+id);
  }
}
