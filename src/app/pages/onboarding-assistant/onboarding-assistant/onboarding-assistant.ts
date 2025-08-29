import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ChatService } from '../../../services/chat';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-onboarding-assistant',
  standalone: true,
  templateUrl: './onboarding-assistant.html',
  styleUrls: ['./onboarding-assistant.scss'],
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatIconModule]
})
export class OnboardingAssistant {
  @ViewChild('chatMessages') private chatMessagesRef!: ElementRef;

  messages: Message[] = [];
  userInput: string = '';

  constructor(private chatService: ChatService) {}

  private scrollToBottom() {
    try {
      this.chatMessagesRef.nativeElement.scrollTop =
        this.chatMessagesRef.nativeElement.scrollHeight;
    } catch {}
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Push user message
    this.messages.push({ text: this.userInput, sender: 'user' });

    // Call API
    this.chatService.sendMessage(this.userInput).subscribe({
      next: (res) => {
        const botReply =
          res?.reply?.trim() || "I'm not sure about that. Please contact HR.";
        this.messages.push({ text: botReply, sender: 'bot' });
        this.scrollToBottom(); // scroll after bot reply
      },
      error: () => {
        this.messages.push({
          text: '⚠️ Error: Could not connect to server.',
          sender: 'bot',
        });
        this.scrollToBottom();
      },
    });

    this.userInput = '';
    setTimeout(() => this.scrollToBottom(), 50); // scroll after user msg
  }
}
