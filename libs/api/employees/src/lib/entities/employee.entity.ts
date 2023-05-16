import { Person } from '@finques-limit/api/shared/database';
import { Entity } from 'typeorm';

@Entity()
export class Employee extends Person {}
