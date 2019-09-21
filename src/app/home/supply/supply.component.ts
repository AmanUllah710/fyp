import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  quantity: number;
  cost: number;
}
@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent{

  displayedColumns: string[] = ['item', 'quantity', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', quantity:4, cost: 4},
    {item: 'Towel', quantity:5, cost: 5},
    {item: 'Frisbee', quantity:6, cost: 2},
    {item: 'Sunscreen', quantity:7, cost: 4},
    {item: 'Cooler', quantity:8, cost: 25},
    {item: 'Swim suit', quantity:9, cost: 15},
    {item: 'Frisbee', quantity:6, cost: 2},
    {item: 'Sunscreen', quantity:7, cost: 4},
    {item: 'Cooler', quantity:8, cost: 25},
    {item: 'Swim suit', quantity:9, cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  getTotalQuantity() {
    return this.transactions.map(t => t.quantity).reduce((acc, value) => acc + value, 0);
  }

}
