
import { TestBed } from '@angular/core/testing';
import { BarchartComponent } from './barchart.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarchartComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BarchartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ng-charts-demo' title`, () => {
    const fixture = TestBed.createComponent(BarchartComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-charts-demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BarchartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ng-charts-demo');
  });
});

