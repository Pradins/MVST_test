import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Tea')
export class TeaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;
}
