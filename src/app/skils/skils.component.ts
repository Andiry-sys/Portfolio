import { Component, OnInit } from '@angular/core';
import { SkilsAndKnowledge } from './Skils';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {

  skill: SkilsAndKnowledge = {
    email: 'marchycandriy@gmail.com',
    twitter: '@AnjickR',
    github: 'https://github.com/Andiry-sys',
    skils: ['.Net Framwork','HTML','CSS','JS','TS','Angular'],
    school: '2-year ItStep Academy',
  };
  title = 'Skils';
  constructor() { }

  ngOnInit(): void {
  }

}
