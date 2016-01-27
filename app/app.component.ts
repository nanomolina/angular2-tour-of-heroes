import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template:`
    <h2>My Heroes</h2>
    <ul class="list-group heroes">
      <li *ngFor="#hero of heroes" class="list-group-item" [class.active]="hero === selectedHero" (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span>
          {{hero.name}}
      </li>
    </ul>


    <div *ngIf="selectedHero">
      <hr>
      <h2>{{title}}</h2>
      <h3>{{selectedHero.id}}: {{selectedHero.name}} details!</h3>
      <div>
        <div class="form-group">
          <label for="hero-id"><strong>id: </strong></label>
          <input type="text" id="hero.id" [(ngModel)]="selectedHero.id" class="form-control">
        </div>
        <div class="form-group">
          <label for="hero-name"><strong>name: </strong></label>
          <input type="text" id="hero-name" [(ngModel)]="selectedHero.name" class="form-control" placeholder="name">
        </div>
      </div>
    </div>
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
})

export class AppComponent {
  public title = 'Tour of Heroes';
  public heroes = HEROES;
  public selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
