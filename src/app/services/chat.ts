import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:5157/api/chat'; // ✅ match controller route

  constructor(private http: HttpClient) {}

  sendMessage(question: string): Observable<{ reply: string }> {
    // ✅ backend expects "question", not "message"
    return this.http.post<{ reply: string }>(`${this.apiUrl}/ask`, { question });
  }
}
