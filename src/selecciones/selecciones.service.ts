import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSeleccionDto } from '../dto/create-card-seleccion.dto';
import { UpdateSeleccionDto } from '../dto/update-card-seleccion.dto';

@Injectable()
export class SeleccionesService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.seleccion.findMany({
            include: { jugadores: true },
    });
}

    findOne(id: number) {
        return this.prisma.seleccion.findUnique({
        where: { id },
        include: { jugadores: true },
    });
}

    create(data: CreateSeleccionDto) {
        return this.prisma.seleccion.create({ data });
}

    update(id: number, data: UpdateSeleccionDto) {
        return this.prisma.seleccion.update({
        where: { id },
        data,
    });
}

    async delete(id: number) {
  // Primero borramos los jugadores asociados
    await this.prisma.jugador.deleteMany({
    where: { seleccionId: id },
});

  // Luego borramos la selección
    return await this.prisma.seleccion.delete({
    where: { id },
});
}

}
