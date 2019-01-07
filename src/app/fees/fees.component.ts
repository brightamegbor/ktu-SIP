import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}

export interface History {
  date: string;
  details: string;
  amount: number;
  balance: number;
}


@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  title = 'Fees';
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'HND Computer Science/Networking', cost: 1574},
    {item: 'HND Hospitality', cost: 1540},
    {item: 'HND Secretaryship & Mgt', cost: 1565},
    {item: 'HND Accountacy', cost: 1425},
    {item: 'HND Renewable Energy', cost: 1628},
    {item: 'HND Graphic Design', cost: 1991},
  ];

  displayedCol: string[] = ['date', 'details', 'amount', 'balance'];
  historys: History[] = [
    {date: '2018/8/14', details: 'School fees', amount: 1887, balance: 1887},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  constructor() { }

  ngOnInit() {
  }
}
