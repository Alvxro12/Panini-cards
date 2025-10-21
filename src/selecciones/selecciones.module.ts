import { Module } from '@nestjs/common';
import { SeleccionesService } from './selecciones.service';
import { SeleccionesController } from './selecciones.controller';

@Module({
  providers: [SeleccionesService],
  controllers: [SeleccionesController]
})
export class SeleccionesModule {}
