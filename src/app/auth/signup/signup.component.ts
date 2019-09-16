import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface Province {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  provinces: Province[] = [
    {value: 'Punjab', viewValue: 'Punjab'},
    {value: 'Sindh', viewValue: 'Sindh'},
    {value: 'Balochistan', viewValue: 'Balochistan'},
    {value: 'KPK', viewValue: 'KPK'},
    {value: 'CPT', viewValue: 'Capital Territory'},
    {value: 'AJK', viewValue: 'Azad Jammu & Kashmir'}
  ];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
