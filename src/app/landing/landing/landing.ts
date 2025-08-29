import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss'],
  imports: [CommonModule]
})
export class Landing implements OnInit {
  isLoggedIn = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
    if (this.isLoggedIn) {
      this.router.navigate(['/home']); // redirect if already logged in
    }
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goSignup() {
    this.router.navigate(['/signup']);
  }
}
