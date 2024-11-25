import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

// Widgets

import { DetailSectionComponent } from '../../widgets/detail-section/detail-section.component';

//Features

import { FullpageScrollComponent } from '../../features/fullpage-scroll/fullpage-scroll.component';



// Shared

import { ListComponent } from '../../shared/list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DetailSectionComponent, ListComponent, FullpageScrollComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  frontendItems = [
    { id: 1, value: 'ReactJS' },
    { id: 2, value: 'VueJS' },
    { id: 3, value: 'AngularJS' },
  ]

  backendItems = [
    { id: 1, value: 'NodeJS' },
    { id: 2, value: 'ExpressJS' },
    { id: 3, value: 'NestJS' },
  ]
}
