import { BaseEntity } from '@finques-limit/api/shared/database';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;
}
