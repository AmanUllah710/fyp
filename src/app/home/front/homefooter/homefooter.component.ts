import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homefooter',
  templateUrl: './homefooter.component.html',
  styleUrls: ['./homefooter.component.css']
})
export class HomefooterComponent implements OnInit {

  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit() {
  }

}
