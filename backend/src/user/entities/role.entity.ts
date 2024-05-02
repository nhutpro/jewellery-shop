import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('ROLE')
export class Role {
  @PrimaryColumn({
    name: 'ID',
  })
  id: number;

  @Column({
    name: 'NAME',
  })
  name: string;
}
