import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@finques-limit/web/auth/data-access';
import { Router } from '@angular/router';

@Component({
  selector: 'finques-limit-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  readonly form = this.fb.group({
    email: this.fb.control('acanet94@gmail.com', { nonNullable: true }),
    password: this.fb.control('aleix1234', { nonNullable: true }),
  });

  errorMessage: string | null = null;

  handleLogin() {
    const { email, password } = this.form.getRawValue();
    this.authService.signIn(email, password).subscribe({
      next: () => {
        this.router.navigate([''], { replaceUrl: true });
      },
      error: (error) => {
        this.errorMessage = error;
        this.form.reset();
      },
    });
  }
}
