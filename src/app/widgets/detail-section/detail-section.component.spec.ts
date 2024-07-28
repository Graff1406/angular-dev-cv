import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailSectionComponent } from './detail-section.component';

describe('DetailSectionComponent', () => {
  let component: DetailSectionComponent;
  let fixture: ComponentFixture<DetailSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default classes', () => {
    expect(component.class).toEqual(['bg-gradient-to-r', 'h-screen', 'w-screen']);
  });

  it('should apply custom classes', () => {
    component.class = 'bg-red-500 h-full w-full';
    fixture.detectChanges();
    const sectionElement = fixture.nativeElement.querySelector('section');
    expect(sectionElement.classList.contains('bg-red-500')).toBeTrue();
    expect(sectionElement.classList.contains('h-full')).toBeTrue();
    expect(sectionElement.classList.contains('w-full')).toBeTrue();
  });

  it('should render header content', () => {
    const headerElement = fixture.nativeElement.querySelector('header');
    expect(headerElement).toBeTruthy();
    expect(headerElement.textContent).toContain('Section');
  });

  it('should render custom header content', () => {
    const customHeader = document.createElement('h1');
    customHeader.textContent = 'Custom Header';
    fixture.componentInstance.header = customHeader;
    fixture.detectChanges();
    const headerElement = fixture.nativeElement.querySelector('header');
    expect(headerElement.textContent).toContain('Custom Header');
  });
});

