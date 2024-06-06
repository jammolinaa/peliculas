import { PartialType } from '@nestjs/mapped-types';
import { CreateCineDto } from './create-cine.dto';

export class UpdateCineDto extends PartialType(CreateCineDto) {}
