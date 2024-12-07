import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-section',
  standalone: true,
  imports: [],
  templateUrl: './detail-section.component.html',
  styleUrl: './detail-section.component.css'
})
export class DetailSectionComponent {
  @Input() header: HTMLElement | undefined;
  @Input() class = 'bg-custom-gradient'; // Default classes
  @Input() title = 'Section'
  @Input() subheader: string | undefined;
  @Input() hideDemoBtn: boolean = false;
}
