import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateJugadorDto } from '../dto/create-card-jugador.dto';
import { UpdateJugadorDto } from '../dto/update-card-jugador.dto';

@Injectable()
export class JugadoresService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.jugador.findMany({
            include: { seleccion: true },
    });
}

    findBySeleccion(seleccionId: number) {
        return this.prisma.jugador.findMany({
            where: { seleccionId },
            include: { seleccion: true },
    });
}

    findOne(id: number) {
        return this.prisma.jugador.findUnique({
            where: { id },
            include: { seleccion: true },
    });
}

    create(data: CreateJugadorDto) {
        return this.prisma.jugador.create({ data });
}

    update(id: number, data: UpdateJugadorDto) {
        return this.prisma.jugador.update({
            where: { id },
            data,
});
}

    delete(id: number) {
        return this.prisma.jugador.delete({ where: { id } });
}
}
