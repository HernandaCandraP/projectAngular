import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form = new FormGroup({
    yourname: new FormControl('', Validators.required),
    youremail: new FormControl('', Validators.email),
    message: new FormControl('', Validators.required)
  })

  get yourname(){
    return this.form.get('yourname');
  }  

  get youremail(){
    return this.form.get('youremail');
  } 

  get message(){
    return this.form.get('message');
  } 

  constructor() { }

  ngOnInit() {
  }

}
