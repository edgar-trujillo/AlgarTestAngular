import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent {
  @Input() searchHeroes: any[] = [];
  @Output() seeHeroDetail: EventEmitter<String> = new EventEmitter();
  columnsToDisplay = ['name', 'id'];

  public seeHero(hero: any) {
    this.seeHeroDetail.emit(hero);
  }
}
