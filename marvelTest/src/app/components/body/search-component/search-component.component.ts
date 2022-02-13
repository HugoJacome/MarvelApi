import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  form: FormGroup = new FormGroup({
    query: new FormControl('', { updateOn: 'submit', validators: [Validators.required] })
  });
  constructor() { }

  ngOnInit(): void {
    
  }
  
  submit() {
    if (this.form.valid) {
      const q: string = this.form.get('query')?.value.trim();
      this.submitted.emit(q);
    }
  }
}

