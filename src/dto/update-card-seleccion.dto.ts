import { PartialType } from '@nestjs/mapped-types';
import { CreateSeleccionDto } from './create-card-seleccion.dto';

export class UpdateSeleccionDto extends PartialType(CreateSeleccionDto) {}
