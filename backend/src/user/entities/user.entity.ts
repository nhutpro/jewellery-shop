import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn('increment', {
    name: 'USER_ID',
  })
  userID: number;

  @Column({
    name: 'USERNAME',
  })
  username: string;

  @Column({
    name: 'PASSWORD',
  })
  password: string;

  @Column({ name: 'FIRST_NAME' })
  firstName: string;

  @Column({ name: 'LAST_NAME' })
  lastName: string;

  @Column({ name: 'ROLE_ID' })
  roleId: number;

  @Column({ name: 'STATUS_ID' })
  statusId: number;

  @CreateDateColumn({ name: 'CREATED_DATE' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'UPDATED_DATE' })
  updatedDate: Date;
}
