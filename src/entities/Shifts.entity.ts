import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Users } from './Users.entity';

@Entity('shifts')
export class Shifts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'assigned_soldier' })
  assigned_soldier: Users;
}
