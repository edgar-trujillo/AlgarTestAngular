import { Component } from '@angular/core';
import { RestService } from 'src/Services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AlgarTestAngular';
  public searchHeroes: any = [];
  public heroDetail: any = null;
  private tokenApi = '10230461490983393';

  constructor(private RestService: RestService) {

  }

  public loadHeroes (searchName: String) {
    this.RestService.searchHeroes('https://www.superheroapi.com/api/' + this.tokenApi + '/search/' + searchName)
    .subscribe((data: any) => {
      data.results.sort(function(a:any, b:any) {
        return parseFloat(b.powerstats.power) - parseFloat(a.powerstats.power);
    });
      this.searchHeroes = data.results;
    })
  }

  public getSearchHeroName (hero: any) {
    this.loadHeroes(hero);
  }

  public seeHeroDetail(hero: any) {
    this.heroDetail = hero;
    console.log(hero);
  }

  public onDetailClose(isOpen: boolean) {
    setTimeout(() => {
      this.heroDetail = null;
    }, 1000);
  }
}
