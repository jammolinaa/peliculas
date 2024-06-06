import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateCineDto {

    id:         number;
    @IsString()
    @IsNotEmpty()
    titulo:         string;
    @IsString()
    @IsNotEmpty()
    duracion:       string;
    @IsString()
    @IsNotEmpty()
    categoria:      string;
    @IsString()
    @IsNotEmpty()
    estreno:        string;
    @IsBoolean()
    disponibilidad: boolean;
}

