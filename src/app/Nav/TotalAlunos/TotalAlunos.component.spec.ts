import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAlunos } from './TotalAlunos.component';

describe('ProdutosComponent', () => {
  let component: TotalAlunos;
  let fixture: ComponentFixture<TotalAlunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalAlunos ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalAlunos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
