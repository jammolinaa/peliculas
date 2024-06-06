import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cine {
    @PrimaryGeneratedColumn()
    id:         number;
    @Column()
    titulo:         string;
    @Column()
    duracion:       string;
    @Column()
    categoria:      string;
    @Column()
    estreno:        string;
    @Column({default:true})
    disponibilidad: boolean;
}
