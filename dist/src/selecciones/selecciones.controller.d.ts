import { SeleccionesService } from './selecciones.service';
import { CreateSeleccionDto } from '../dto/create-card-seleccion.dto';
import { UpdateSeleccionDto } from '../dto/update-card-seleccion.dto';
export declare class SeleccionesController {
    private readonly seleccionesService;
    constructor(seleccionesService: SeleccionesService);
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__SeleccionClient<({
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
    create(dto: CreateSeleccionDto): import("@prisma/client").Prisma.Prisma__SeleccionClient<{
        pais: string;
        confederacion: string;
        campeonatos: number;
        escudo: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateSeleccionDto): import("@prisma/client").Prisma.Prisma__SeleccionClient<{
        pais: string;
        confederacion: string;
        campeonatos: number;
        escudo: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): Promise<{
        pais: string;
        confederacion: string;
        campeonatos: number;
        escudo: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
