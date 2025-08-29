import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-platforms',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './platforms.html',
  styleUrls: ['./platforms.scss']
})
export class Platforms {
  platforms = [
    {
      title: 'RapidX™',
      description: 'Create direct, tailored paths for your teams to develop against any need'
    },
    {
      title: 'Tensai®',
      description: 'Automate your essential processes to increase quality and efficiency'
    },
    {
      title: 'Amaze®',
      description: 'Speed and steady your product, platform, process, and data journey to the cloud'
    }
  ];
}
