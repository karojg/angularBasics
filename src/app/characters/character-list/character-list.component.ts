import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})

export class CharacterListComponent implements OnInit {

  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  pageTitle = 'Character List';
  filteredCharacters: any[];
  characters: any[];

  private _listFilter: string;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this._listFilter = '';
    this.characters = this.characterService.getCharacters();
    this.filteredCharacters = this.characters;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    // evaluar si el filtro contiene el valor. si no hay ningun valor en el input queremos que retorne todos
    this.filteredCharacters = this._listFilter ? this.performFilter(this._listFilter) : this.characters;
  }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLowerCase();
    return this.characters.filter(character => {
      // si el string contiene o no el valor que enviamos por el filtro
      return character.name.toLowerCase().includes(filterBy);
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
