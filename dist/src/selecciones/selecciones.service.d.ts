import { PrismaService } from '../../prisma/prisma.service';
import { CreateSeleccionDto } from '../dto/create-card-seleccion.dto';
import { UpdateSeleccionDto } from '../dto/update-card-seleccion.dto';
export declare class SeleccionesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        jugadores: {
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
        }[];
    } & {
        pais: string;
        confederacion: string;
        campeonatos: number;
        escudo: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    })[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__SeleccionClient<({
        jugadores: {
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
        }[];
    } & {
        pais: string;
        confederacion: string;
        campeonatos: number;
        escudo: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: CreateSeleccionDto): import("@prisma/client").Prisma.Prisma__SeleccionClient<{
        pais: string;
        confederacion: string;
        campeonatos: number;
        escudo: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: UpdateSeleccionDto): import("@prisma/client").Prisma.Prisma__SeleccionClient<{
        pais: string;
        confederacion: string;
        campeonatos: number;
        escudo: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    delete(id: number): Promise<{
        pais: string;
        confederacion: string;
        campeonatos: number;
        escudo: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
