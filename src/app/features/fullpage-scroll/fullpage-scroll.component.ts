import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fullpage-scroll',
  standalone: true,
  templateUrl: './fullpage-scroll.component.html',
  styleUrls: ['./fullpage-scroll.component.css'],
  imports: [CommonModule]
})
export class FullPageScrollComponent {
  private isScrolling = false;
  private isWindow = typeof window !== 'undefined';
  private screenHeight = this.isWindow ? window.innerHeight : 0;
  private startTouchY = 0;

  @HostListener('window:wheel', ['$event'])
  async onWheel(event: WheelEvent): Promise<void> {
    if (this.isWindow) {
      if (this.isScrolling) return;

      this.isScrolling = true;
      const currentScroll = window.scrollY;
      const nextScroll = event.deltaY > 0
        ? currentScroll + this.screenHeight
        : currentScroll - this.screenHeight;

      console.log('🚀 ~ nextScroll:', nextScroll);
      await this.smoothScrollTo(Math.abs(nextScroll));
      this.isScrolling = false;
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.startTouchY = event.touches[0].clientY;
  }

  @HostListener('touchmove', ['$event'])
  async onTouchMove(event: TouchEvent): Promise<void> {
    if (this.isScrolling) return;
    const touchMoveY = event.touches[0].clientY;
    const deltaY = this.startTouchY - touchMoveY;

    if (Math.abs(deltaY) > 30) {
      this.isScrolling = true;
      const currentScroll = window.scrollY;
      const nextScroll = deltaY > 0
        ? currentScroll + this.screenHeight
        : currentScroll - this.screenHeight;

      console.log('🚀 ~ nextScroll:', nextScroll);
      await this.smoothScrollTo(Math.abs(nextScroll));
      this.isScrolling = false;
    }
  }

  private smoothScrollTo(targetPosition: number): Promise<void> {
    return new Promise((resolve) => {
      window.scrollTo({
        top: Math.ceil(targetPosition),
        behavior: 'smooth',
      });
      console.log('🚀 ~ HomeComponent ~ return new Promise ~ targetPosition:', targetPosition);

      const checkIfDone = () => {
        const currentScroll = window.scrollY;
        const difference = Math.abs(currentScroll - targetPosition);

        if (difference < 2) {
          resolve();
        } else {
          requestAnimationFrame(checkIfDone);
        }
      };

      checkIfDone();
    });
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
      });
    }
  }
}
