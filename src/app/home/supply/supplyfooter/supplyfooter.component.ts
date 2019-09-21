import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface City {
  name: string;
}

export interface Distributor {
  name: string;
}

@Component({
  selector: 'app-supplyfooter',
  templateUrl: './supplyfooter.component.html',
  styleUrls: ['./supplyfooter.component.css']
})
export class SupplyfooterComponent {

  cityControl = new FormControl('', [Validators.required]);
  distributorControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  cities: City[] = [
    {name: 'Islamabad'},
    {name: 'Rawalpindi'},
    {name: 'Lahore'},
    {name: 'Karachi'},
  ];

  distributors: Distributor[] = [
    {name: 'D-Watson'},
    {name: 'Shaheen'},
    {name: 'Danish'},
    {name: 'COMSATS'},
  ];


}
