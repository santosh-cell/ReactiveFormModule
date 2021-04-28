import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info;
  title = 'ReactiveFormModule';
  constructor(private formBuilder: FormBuilder) {
    this.info = this.formBuilder.group({
      name: '',
      fathername: '',
      email: '',
      age: '',
      contact: '',
      massage: '',
    })
    
  }

  onSubmit(values: any) {
    console.warn("Form Submit", values)
  }
}


