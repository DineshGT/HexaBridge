import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5157/api/auth';
  private loggedIn$ = new BehaviorSubject<boolean>(!!this.getToken());

  constructor(private http: HttpClient) {}

  signup(userData: any): Observable<any> {
    const payload = {
      id: 0,
      username: userData.email,
      password: userData.password,
      email: userData.email
    };
    return this.http.post(`${this.apiUrl}/register`, payload);
  }

  login(credentials: any): Observable<any> {
    const payload = {
      id: 0,
      username: credentials.email,
      password: credentials.password,
      email: credentials.email
    };
    return this.http.post(`${this.apiUrl}/login`, payload);
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
