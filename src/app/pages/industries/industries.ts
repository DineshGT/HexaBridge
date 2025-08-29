import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './industries.html',
  styleUrls: ['./industries.scss']
})
export class Industries {
  industries = [
    { title: 'Banking', description: 'Driving digital transformation in core banking and financial ecosystems.' },
    { title: 'Education & Institutions', description: 'Empowering institutions with technology for the future of learning.' },
    { title: 'Financial Services', description: 'Innovating secure, customer-centric financial experiences.' },
    { title: 'High Tech, Products & Platforms', description: 'Delivering scalable and future-ready tech solutions.' },
    { title: 'Insurance', description: 'Building smarter, customer-first insurance platforms and products.' },
    { title: 'Life Sciences & Healthcare', description: 'Transforming patient care and healthcare operations through innovation.' },
    { title: 'Manufacturing', description: 'Enabling Industry 4.0 with smart factories and digital supply chains.' },
    { title: 'Private Equity', description: 'Accelerating growth with advanced data-driven insights.' },
    { title: 'Professional Services', description: 'Boosting efficiency and scalability for professional ecosystems.' },
    { title: 'Retail & Consumer', description: 'Reimagining retail and consumer engagement with AI and analytics.' },
    { title: 'Telecom & Utilities', description: 'Enhancing connectivity, infrastructure, and customer experience.' },
    { title: 'Transportation & Logistics', description: 'Optimizing logistics with automation and digital operations.' },
    { title: 'Travel & Hospitality', description: 'Delivering memorable, tech-driven travel and hospitality experiences.' }
  ];
}
