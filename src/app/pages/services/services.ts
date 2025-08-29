import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Digital & Software',
      description: 'Deliver powerful software solutions to your users'
    },
    {
      title: 'Data & Analytics',
      description: 'Uncover business insights through the power of data analytics'
    },
    {
      title: 'Digital IT Operations',
      description: 'Run, optimize and secure applications and infrastructure'
    },
    {
      title: 'Cloud',
      description: 'Accelerate your journey, 2x faster than industry standard'
    },
    {
      title: 'Enterprise Platform Services',
      description: 'Build your business on the world\'s leading platforms'
    },
    {
      title: 'Business Process Services',
      description: 'Outsource, manage and automate business processes'
    },
    {
      title: 'Generative AI',
      description: 'Enable intelligent automation and insight at scale with next-gen AI solutions'
    },
   
    {
      title: 'Offerings – Application Services',
      description: 'Modernize, scale and optimize your application landscape'
    },
    
    
    {
      title: 'Offerings – Testing',
      description: 'Ensure product quality with comprehensive testing services'
    },
    {
      title: 'Offerings – Vibe Coding',
      description: 'Innovative coding solutions to accelerate business outcomes'
    }
  ];
}
