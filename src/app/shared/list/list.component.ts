import { Component, Input } from '@angular/core';

// Interface

interface Items {
  id: number;
  value: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() items: Items[] = [];
}
