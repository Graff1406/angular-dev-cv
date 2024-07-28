import { Component, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fullpage-scroll',
  standalone: true,
  templateUrl: './fullpage-scroll.component.html',
  styleUrls: ['./fullpage-scroll.component.css']
})
export class FullpageScrollComponent implements AfterViewInit {
  @ViewChild('fullpageContainer') fullpageContainer!: ElementRef;
  private sections!: HTMLElement[];
  private currentSectionIndex = 0;

  ngAfterViewInit(): void {
    this.sections = Array.from(this.fullpageContainer.nativeElement.children) as HTMLElement[];
    this.updateSectionVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = window.scrollY;
    const sectionHeight = this.fullpageContainer.nativeElement.clientHeight;

    this.currentSectionIndex = Math.round(scrollTop / sectionHeight);
    this.updateSectionVisibility();
  }

  private updateSectionVisibility(): void {
    this.sections.forEach((section, index) => {
      section.style.transform = `translateY(${-(this.currentSectionIndex * 100)}vh)`;
      section.style.transition = 'transform 0.8s ease-in-out';
    });
  }

  scrollToSection(index: number): void {
    if (index >= 0 && index < this.sections.length) {
      window.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  }
}
