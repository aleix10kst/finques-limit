export * from './auth.service';
import { AuthService } from './auth.service';
export * from './employees.service';
import { EmployeesService } from './employees.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [AuthService, EmployeesService, UsersService];
