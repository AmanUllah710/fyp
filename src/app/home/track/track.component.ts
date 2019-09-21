import { Component } from '@angular/core';

export interface PeriodicElement {
  order_id: number;
  distributor_name: string,
  delivery_date: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {order_id: 1, distributor_name: "abc", delivery_date: '20/10/2019', status: 'abc'},
  {order_id: 2, distributor_name: "abc", delivery_date: '20/10/2019', status: 'abc'},
  {order_id: 3, distributor_name: "abc", delivery_date: '20/10/2019', status: 'abc'},
  {order_id: 4, distributor_name: "abc", delivery_date: '20/10/2019', status: 'abc'},
  {order_id: 5, distributor_name: "abc", delivery_date: '20/10/2019', status: 'abc'},
  {order_id: 6, distributor_name: "abc", delivery_date: '20/10/2019', status: 'abc'},
  {order_id: 7, distributor_name: "abc", delivery_date: '20/10/2019', status: 'abc'},

];


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {

  displayedColumns: string[] = ['order_id', 'distributor_name' , 'delivery_date', 'status', 'track'];
  dataSource = ELEMENT_DATA;

}
