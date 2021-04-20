import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title!: string;

  myForm = new FormGroup({
    firstName: new FormControl({
      value: '',
      disabled: false,
    }),

    lastName: new FormControl({
      value: '',
      disabled: true,
    }),
  });

  mySubmitFunction(event: any): void {
    event.preventDefault();

    console.log(JSON.stringify(this.myForm.value));
  }

  ngOnInit(): void {
    const firstNameControl = this.myForm.get('firstName') as FormControl;
    const lastNameControl = this.myForm.get('lastName') as FormControl;

    this.title = 'Viswa is Awesome'; // it's true

    firstNameControl.valueChanges.subscribe((fn) => {
      if (fn.length > 0) {
        lastNameControl.enable();
      } else {
        lastNameControl.disable();
      }
    });
  }
}
