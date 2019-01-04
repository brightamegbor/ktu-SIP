import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  typesOfCourses: { name:string; }[] = [
  	{ name: 'Programming with Java II'}, 
  	{ name: 'Routing and Switching'}, 
  	{ name: 'Research Methods' }, 
  	{ name: 'Distributed Computing' }, 
  	{ name: 'OS and Open Source' }, 
  	{ name: 'Network Maintenance' }, 
  	{ name: 'Industrial Attachment' }];

  	current_selected: string;

  	onSelection(e, v){
  	  this.current_selected = e.option.value;
  	}

  constructor() { }

  ngOnInit() {
  }
title = 'Registration';
}
