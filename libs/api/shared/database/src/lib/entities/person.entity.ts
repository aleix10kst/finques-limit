import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class Person extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column('date')
  dateOfBirth!: Date;
}
