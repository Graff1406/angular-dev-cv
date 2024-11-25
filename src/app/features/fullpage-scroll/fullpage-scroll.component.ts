import { Component, AfterViewInit, OnDestroy, ViewChildren, QueryList, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-fullpage-scroll',
  standalone: true,
  templateUrl: './fullpage-scroll.component.html',
  styleUrls: ['./fullpage-scroll.component.css'],
  imports: [CommonModule]
})
export class FullpageScrollComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('section') sections!: QueryList<ElementRef>;
  private currentSectionIndex = 0;
  private isScrolling = false;
  private isBrowser: boolean;
  private windowHeight = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.windowHeight = window.innerHeight; // Определяем высоту экрана
      window.addEventListener('resize', this.onResize);
      document.addEventListener('wheel', this.onWheel);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      document.removeEventListener('wheel', this.onWheel);
      window.removeEventListener('resize', this.onResize);
    }
  }

  onResize = (): void => {
    this.windowHeight = window.innerHeight;
  }

  onWheel = (event: WheelEvent): void => {
    console.log(1111)
    if (this.isScrolling) {
      return;
    }

    this.isScrolling = true;

    if (event.deltaY > 0) {
      this.scrollToNextSection();
    } else {
      this.scrollToPreviousSection();
    }
  }

  scrollToNextSection(): void {
    if (this.currentSectionIndex < this.sections.length - 1) {
      this.currentSectionIndex++;
      this.scrollToCurrentSection();
    } else {
      this.isScrolling = false;
    }
  }

  scrollToPreviousSection(): void {
    if (this.currentSectionIndex > 0) {
      this.currentSectionIndex--;
      this.scrollToCurrentSection();
    } else {
      this.isScrolling = false;
    }
  }

  scrollToCurrentSection(): void {
    const section = this.sections.toArray()[this.currentSectionIndex];
    window.scrollTo({ top: this.currentSectionIndex * this.windowHeight, behavior: 'smooth' });

    setTimeout(() => {
      this.isScrolling = false;
    }, 1000); // Продолжительность анимации прокрутки
  }
}
