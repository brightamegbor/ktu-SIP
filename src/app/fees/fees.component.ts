import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
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
  

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  constructor() { }

  ngOnInit() {
  }
}
