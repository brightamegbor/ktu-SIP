import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	title = 'Dashboard';
	spaceScreens: Array<any>;

  constructor(private http:HttpClient) { 
  	this.http.get('./data.json')
  		.pipe(map((response:any) => response.json().screenshots))
  		.subscribe(res => this.spaceScreens = res);
  }

  ngOnInit() {
  }

}
