import {Component} from 'angular2/core';
import {Hero} from './hero'
import {HeroDetailComponent} from './hero_detail.component';

@Component({
  selector: 'my-app',
  template:`
    <h2>My Heroes</h2>
    <ul class="list-group heroes">
      <li *ngFor="#hero of heroes" class="list-group-item"
        [class.active]="hero === selectedHero"
        (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span>
          {{hero.name}}
      </li>
    </ul>

    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
  styles:[`
    .heroes li {
      margin: .10em;
      cursor: pointer;
    }
    .heroes li:hover {
      border: 1px solid #df691a;
    }
    .badge {
      border: 1px solid #df691a;
    }
  `],
  directives: [HeroDetailComponent],
})

export class AppComponent {
  public title = 'Tour of Heroes';
  public heroes: Hero[];
  public selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
