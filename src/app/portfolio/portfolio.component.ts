import { Component, OnInit } from '@angular/core';
import { PersonPortfolio } from './PersonPortfolio';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  person: PersonPortfolio = {
    id: 1,
    name: 'Andriy',
    surname: 'Marchyc',
    age: 17,
    address: '123 Main St',
    city: 'Chernivtsi',
    country: 'Ukraine',
    phone: '555-555-5555',
   
    
  };
  

  ngOnInit(): void {
  }

}
