import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  character: Character = {
    id: 1,
    name: 'Brother Tiberius',
    charClass: 'Cleric',
    level: 8,
    armorClass: 17,
    hitPoints: 68
  };

  constructor() { }

  ngOnInit() {
  }

}
