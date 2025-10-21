import { IsInt, IsString, IsUrl, Min } from 'class-validator';

export class CreateSeleccionDto {
    @IsString()
    pais: string;

    @IsString()
    confederacion: string;

    @IsInt()
    @Min(0)
    campeonatos: number;

    @IsUrl()
    escudo: string;
}
