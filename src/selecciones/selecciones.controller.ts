import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { SeleccionesService } from './selecciones.service';
import { CreateSeleccionDto } from '../dto/create-card-seleccion.dto';
import { UpdateSeleccionDto } from '../dto/update-card-seleccion.dto';

@Controller('selecciones')
    export class SeleccionesController {
        constructor(private readonly seleccionesService: SeleccionesService) {}

    @Get()
        findAll() {
            return this.seleccionesService.findAll();
}

    @Get(':id')
        findOne(@Param('id') id: string) {
            return this.seleccionesService.findOne(+id);
}

    @Post()
        create(@Body() dto: CreateSeleccionDto) {
            return this.seleccionesService.create(dto);
}

    @Patch(':id')
        update(@Param('id') id: string, @Body() dto: UpdateSeleccionDto) {
            return this.seleccionesService.update(+id, dto);
}

    @Delete(':id')
        remove(@Param('id') id: string) {
            return this.seleccionesService.delete(Number(id));
}
}
