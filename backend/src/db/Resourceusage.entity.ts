//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Resourceusage')
export class ResourceusageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  resourceType: string;

  @Column('real', { nullable: true })
  quantityConsumed: number;

  @Column('text', { nullable: true })
  unitOfMeasurement: string;

  @Column('date', { nullable: true })
  periodOfConsumption: Date;
}
