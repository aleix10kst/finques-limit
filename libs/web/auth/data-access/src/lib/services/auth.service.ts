import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly authUser = new BehaviorSubject<string | null>(null);
  readonly authUser$ = this.authUser.asObservable();
  signIn(email: string, password: string) {
    this.authUser.next(email);
    return of(true);
  }
}
