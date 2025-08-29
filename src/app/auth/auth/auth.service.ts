import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // No backend API needed
  private loggedIn$ = new BehaviorSubject<boolean>(!!this.getToken());

  constructor() {}

  // Dummy signup: returns success immediately
  signup(userData: any): Observable<any> {
    console.log('Signup called with:', userData);
    // Return a fake success response
    return of({ success: true, message: 'User registered successfully!' });
  }

  // Dummy login: returns a fake token
  login(credentials: any): Observable<any> {
    console.log('Login called with:', credentials);
    const fakeToken = 'dummy-token';
    this.saveToken(fakeToken);
    return of({ success: true, token: fakeToken, message: 'Login successful!' });
  }

  saveToken(token: string) {
    localStorage.setItem('authToken', token);
    this.loggedIn$.next(true); // notify subscribers
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout() {
    localStorage.removeItem('authToken');
    this.loggedIn$.next(false); // notify subscribers
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getLoggedInObservable(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }
}
