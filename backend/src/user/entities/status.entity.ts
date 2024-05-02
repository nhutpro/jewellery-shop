import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('STATUS')
export class Status {
    @PrimaryColumn({
        name: "ID"
    })
    id: number;

    @Column({
        name: 'NAME'
    })
    name: string;
}