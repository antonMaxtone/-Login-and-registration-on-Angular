import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
    });
  }

  onSubmit() {
    console.log('Submited!', this.form);
  }

}
