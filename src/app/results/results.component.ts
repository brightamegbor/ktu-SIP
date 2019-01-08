import { Component, OnInit } from '@angular/core';

export interface Transaction {
  code: string;
  details: string;
  marks: number;
  grade: string;
  credits: number;
  gp: number;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['code', 'details', 'marks', 'grade', 'credits', 'gp'];
  
  transactions: Transaction[] = [
  {code: 'AFS101', details:'African Studies I', marks: 86, grade: 'A+', credits: 3, gp: 15},

  {code: 'AFS101', details:'Introduction to Structered Programming', marks: 86, grade: 'A+', credits: 3, gp: 15},

  {code: 'AFS101', details:'Technology Mathematics', marks: 86, grade: 'A+', credits: 3, gp: 15},

  {code: 'AFS101', details:'Introduction To Computer Science IT', marks: 86, grade: 'A+', credits: 3, gp: 15},

  {code: 'AFS101', details:'Computer Hardware', marks: 86, grade: 'A+', credits: 3, gp: 15},

  {code: 'AFS101', details:'Communication Skill I', marks: 86, grade: 'A+', credits: 3, gp: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.credits).reduce((acc, value) => acc + value, 0);
  }

  constructor() { }

  ngOnInit() {
  }
title = 'Results';
}
