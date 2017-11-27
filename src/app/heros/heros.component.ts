import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor() {
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  ngOnInit() {
  }

}
