import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tuit' })
export class Tuit {
  @PrimaryGeneratedColumn('increment') //^ increment es una buena practica
  id: number;

  @Column()
  message: string;

  // @Column({ default: true })
  // test?: boolean; //^ Este campo es opcional

  @Column({ default: true })
  active: boolean;
}
