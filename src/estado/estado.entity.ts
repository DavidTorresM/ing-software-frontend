import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { Direccion } from '../direccion/direccion.entity';

@Entity()
export class Estado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
