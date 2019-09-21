import { Component } from '@angular/core';

export interface PeriodicElement {
  order_id: number;
  name: string;
  date: string;
  order: {name: string};
}

const ELEMENT_DATA: PeriodicElement[] = [
  {order_id: 1, name: 'Hydrogen', date: 'abc', order: {name:'abc'}},
  {order_id: 2, name: 'Helium', date: 'abc', order: {name:'abc'}},
  {order_id: 3, name: 'Lithium', date: 'abc', order: {name:'abc'}},
  {order_id: 4, name: 'Beryllium', date: 'abc', order: {name:'abc'}},
  {order_id: 5, name: 'Boron', date: 'abc', order: {name:'abc'}},
  {order_id: 6, name: 'Carbon', date: 'abc', order: {name:'abc'}},
  {order_id: 7, name: 'Nitrogen', date: 'abc', order: {name:'abc'}},

];
@Component({
  selector: 'app-pendingorders',
  templateUrl: './pendingorders.component.html',
  styleUrls: ['./pendingorders.component.css']
})
export class PendingordersComponent{

  displayedColumns: string[] = ['order_id', 'name', 'date', 'order', 'supply'];
  dataSource = ELEMENT_DATA;

}
