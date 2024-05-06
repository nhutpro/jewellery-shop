import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('SESSION')
export class Session {
  @PrimaryGeneratedColumn('uuid', {
    name: 'ID',
  })
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'USER_ID',
  })
  userId: User;

  @Column({
    name: 'HASH',
  })
  hash: string;

  @CreateDateColumn({ name: 'CREATED_AT' })
  createdAt: Date;

  @CreateDateColumn({ name: 'UPDATED_AT' })
  updatedAt: Date;

  @CreateDateColumn({ name: 'DELETED_AT' })
  deletedAt: Date;
}
