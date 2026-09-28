import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AiToolDetails } from './ai-tool-details';

describe('AiToolDetails', () => {
  let component: AiToolDetails;
  let fixture: ComponentFixture<AiToolDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiToolDetails],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AiToolDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
