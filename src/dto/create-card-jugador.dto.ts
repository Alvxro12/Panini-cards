import { IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, Max, Min } from 'class-validator';

export class CreateJugadorDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsInt()
    @Min(15)
    @Max(50)
    edad: number;

    @IsString()
    @IsOptional()
    posicion?: string;

    @IsInt()
    @Min(0)
    @Max(100)
    dribling: number;

    @IsInt()
    @Min(0)
    @Max(100)
    velocidad: number;

    @IsInt()
    @Min(0)
    @Max(100)
    regate: number;

    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    defensa?: number;

    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    tiro?: number;

    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    pase?: number;

    @IsInt()
    @IsOptional()
    @Min(0)
    @Max(100)
    fisico?: number;

    @IsUrl()
    @IsNotEmpty()
    urlImagen: string;

    @IsInt()
    @IsNotEmpty()
    seleccionId: number;
}
