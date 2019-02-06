import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newUser=new User("");
@Output() addUser=new EventEmitter<User>();

submitUser(){
  this.addUser.emit(this.newUser);
}
  constructor() { }

  ngOnInit() {
  }

}