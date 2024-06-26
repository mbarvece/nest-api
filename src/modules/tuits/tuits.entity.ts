import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/entities';

@Entity({ name: 'tuit' })
export class Tuit {
  @PrimaryGeneratedColumn('increment') //^ increment es una buena practica
  id: number;

  @Column()
  message: string;

  @ManyToOne(() => User, (user) => user.tuits, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  // @Column({ default: true })
  // test?: boolean; //^ Este campo es opcional

  @Column({ default: true })
  active: boolean;
}
