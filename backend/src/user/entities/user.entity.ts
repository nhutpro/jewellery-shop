import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { USER_TABLE } from '../user.constants';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn('increment', {
    name: USER_TABLE.USER_ID,
  })
  userId: number;

  @Column({
    name: USER_TABLE.USERNAME,
  })
  username: string;

  @Column({
    name: USER_TABLE.EMAIL,
  })
  email: string;

  @Column({
    name: USER_TABLE.PASSWORD,
  })
  password: string;

  @Column({ name: USER_TABLE.FIRST_NAME })
  firstName: string;

  @Column({ name: USER_TABLE.LAST_NAME })
  lastName: string;

  @Column({ name: USER_TABLE.ROLE_ID })
  roleId: number;

  @Column({ name: USER_TABLE.STATUS_ID })
  statusId: number;

  @CreateDateColumn({ name: USER_TABLE.CREATED_AT })
  createdAt: Date;

  @CreateDateColumn({ name: USER_TABLE.UPDATED_AT })
  updatedAt: Date;

  @CreateDateColumn({ name: USER_TABLE.DELETED_AT })
  deletedAt: Date;
}
