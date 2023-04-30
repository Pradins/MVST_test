import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum CoffeeVariety {
  ARABIC = 'arabic',
  ROBUSTA = 'robusta',
}

@Entity('Coffee')
export class CoffeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column({
    type: 'enum',
    enum: CoffeeVariety,
    default: null,
  })
  variety: CoffeeVariety;
}
