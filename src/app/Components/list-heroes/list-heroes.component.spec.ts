import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroesComponent } from './list-heroes.component';

describe('ListheroesComponent', () => {
  let component: ListHeroesComponent;
  let fixture: ComponentFixture<ListHeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHeroesComponent]
    });
    fixture = TestBed.createComponent(ListHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call see hero detail', () => {
    spyOn(component.seeHeroDetail, 'emit');
    component.seeHero({name: 'Batman'});
    expect(component.seeHeroDetail.emit).toHaveBeenCalled();
  });
});
