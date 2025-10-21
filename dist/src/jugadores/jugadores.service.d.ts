import { PrismaService } from '../../prisma/prisma.service';
import { CreateJugadorDto } from '../dto/create-card-jugador.dto';
import { UpdateJugadorDto } from '../dto/update-card-jugador.dto';
export declare class JugadoresService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        seleccion: {
            pais: string;
            confederacion: string;
            campeonatos: number;
            escudo: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        nombre: string;
        edad: number;
        posicion: string | null;
        dribling: number;
        velocidad: number;
        regate: number;
        defensa: number | null;
        tiro: number | null;
        pase: number | null;
        fisico: number | null;
        urlImagen: string;
        seleccionId: number;
    })[]>;
    findBySeleccion(seleccionId: number): import("@prisma/client").Prisma.PrismaPromise<({
        seleccion: {
            pais: string;
            confederacion: string;
            campeonatos: number;
            escudo: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        nombre: string;
        edad: number;
        posicion: string | null;
        dribling: number;
        velocidad: number;
        regate: number;
        defensa: number | null;
        tiro: number | null;
        pase: number | null;
        fisico: number | null;
        urlImagen: string;
        seleccionId: number;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__JugadorClient<({
        seleccion: {
            pais: string;
            confederacion: string;
            campeonatos: number;
            escudo: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        nombre: string;
        edad: number;
        posicion: string | null;
        dribling: number;
        velocidad: number;
        regate: number;
        defensa: number | null;
        tiro: number | null;
        pase: number | null;
        fisico: number | null;
        urlImagen: string;
        seleccionId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: CreateJugadorDto): import("@prisma/client").Prisma.Prisma__JugadorClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        nombre: string;
        edad: number;
        posicion: string | null;
        dribling: number;
        velocidad: number;
        regate: number;
        defensa: number | null;
        tiro: number | null;
        pase: number | null;
        fisico: number | null;
        urlImagen: string;
        seleccionId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: UpdateJugadorDto): import("@prisma/client").Prisma.Prisma__JugadorClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        nombre: string;
        edad: number;
        posicion: string | null;
        dribling: number;
        velocidad: number;
        regate: number;
        defensa: number | null;
        tiro: number | null;
        pase: number | null;
        fisico: number | null;
        urlImagen: string;
        seleccionId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    delete(id: number): import("@prisma/client").Prisma.Prisma__JugadorClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        nombre: string;
        edad: number;
        posicion: string | null;
        dribling: number;
        velocidad: number;
        regate: number;
        defensa: number | null;
        tiro: number | null;
        pase: number | null;
        fisico: number | null;
        urlImagen: string;
        seleccionId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
