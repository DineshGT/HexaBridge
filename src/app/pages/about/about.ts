import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
  aboutItems = [
    { title: 'About Hexaware', description: 'Discover who we are and what drives our vision for the future.' },
    { title: 'Leadership', description: 'Meet the leaders who shape strategy and inspire innovation.' },
    { title: 'Diversity, Equity & Inclusion', description: 'Building an inclusive workplace where everyone belongs.' },
    { title: 'Environmental, Social & Governance', description: 'Our commitment to sustainability and responsible practices.' },
    { title: 'Corporate Social Responsibility', description: 'Creating positive impact in the communities we serve.' },
    { title: 'Partners', description: 'Collaborating with global partners to drive mutual growth.' },
    { title: 'Newsroom', description: 'Stay updated with the latest news and announcements.' },
    { title: 'Events', description: 'Engage with us through conferences, webinars, and industry events.' },
    { title: 'Awards & Recognitions', description: 'Celebrating milestones and achievements worldwide.' },
    { title: 'Locations', description: 'Explore our global presence across multiple geographies.' }
  ];
}
