import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-for-job',
  templateUrl: './pay-for-job.component.html',
  styleUrls: ['./pay-for-job.component.css']
})
export class PayForJobComponent implements OnInit {

  time:number =  0.20;
  price: number = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
