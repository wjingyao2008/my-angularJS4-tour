import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor() {
  }

  selectedHero: Hero
  heroes = HEROES;
  ngOnInit() {
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
