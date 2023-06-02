import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss']
})
export class SearchTabComponent {
   public nameHero: String = '';
   @Output() searchHeroName: EventEmitter<String> = new EventEmitter();
   
   public onKey(event: any) {
    this.nameHero = event.target.value;
    this.searchHeroName.emit(this.nameHero);
  }
}
