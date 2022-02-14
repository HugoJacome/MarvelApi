import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { SearchComponentComponent } from './search-component.component';

describe('SearchComponentComponent', () => {
  let component: SearchComponentComponent;
  let fixture: ComponentFixture<SearchComponentComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchComponentComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(SearchComponentComponent);
        component = fixture.componentInstance;
        debug = fixture.debugElement.query(By.css('form'));
        element = debug.nativeElement;
      });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true', async () => {
    component.submit();
    expect(component.submitted).toBeTruthy();
  })

  it('should call the submit method',async () => {
    fixture.detectChanges();
    spyOn(component, 'submit');
    element = fixture.debugElement.query(By.css('button')).nativeElement;
    element.click();
    expect(component.submit).toHaveBeenCalledTimes(1);
  })

  it('form should be invalid',async () => {
    component.form.controls['query'].setValue('');
    expect(component.form.valid).toBeFalsy();
  })
  
  it('form should be valid',async () => {
    component.form.controls['query'].setValue('ant');
    expect(component.form.valid).toBeTruthy();
  })
});