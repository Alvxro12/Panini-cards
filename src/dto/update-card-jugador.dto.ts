import { PartialType } from '@nestjs/mapped-types';
import { CreateJugadorDto } from './create-card-jugador.dto';

export class UpdateJugadorDto extends PartialType(CreateJugadorDto) {}
