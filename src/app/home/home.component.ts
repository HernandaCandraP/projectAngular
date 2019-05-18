import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }
  
  get username(){
    return this.form.get('username');
  }  

  get password(){
    return this.form.get('password');
  } 

  constructor() { }

  ngOnInit() {
  }

}
