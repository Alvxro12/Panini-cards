import { Module } from '@nestjs/common';
import { SeleccionesModule } from './selecciones/selecciones.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule,SeleccionesModule, JugadoresModule],
})
export class AppModule {}
