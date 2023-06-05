import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CdkMenuModule } from '@angular/cdk/menu';
import { AuthenticationService } from '@finques-limit/web/auth/data-access';

@Component({
  selector: 'finques-limit-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CdkMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly authenticationService = inject(AuthenticationService);

  handleMyAccount() {
    console.log('This should go to my account');
  }

  handleSignOut() {
    this.authenticationService.signOut();
    this.router.navigate(['auth', 'sign-in'], { replaceUrl: true });
  }
}
