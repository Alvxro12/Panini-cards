import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { JugadoresService } from './jugadores.service';
import { CreateJugadorDto } from '../dto/create-card-jugador.dto';
import { UpdateJugadorDto } from '../dto/update-card-jugador.dto';

@Controller('jugadores')
export class JugadoresController {
    constructor(private readonly jugadoresService: JugadoresService) {}

    @Get()
        findAll() {
            return this.jugadoresService.findAll();
}

    @Get('seleccion/:seleccionId')
        findBySeleccion(@Param('seleccionId') seleccionId: string) {
            return this.jugadoresService.findBySeleccion(+seleccionId);
}

    @Get(':id')
        findOne(@Param('id') id: string) {
            return this.jugadoresService.findOne(+id);
}

    @Post()
        create(@Body() dto: CreateJugadorDto) {
            return this.jugadoresService.create(dto);
}

    @Patch(':id')
        update(@Param('id') id: string, @Body() dto: UpdateJugadorDto) {
            return this.jugadoresService.update(+id, dto);
}

    @Delete(':id')
        remove(@Param('id') id: string) {
            return this.jugadoresService.delete(+id);
}
}
