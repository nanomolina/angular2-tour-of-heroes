import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>{{hero.id}}: {{hero.name}} details!</h2>
    <div>
      <div class="form-group">
        <label for="hero-id"><strong>id: </strong></label>
        <input type="text" id="hero.id" [(ngModel)]="hero.id" class="form-control">
      </div>
      <div class="form-group">
        <label for="hero-name"><strong>name: </strong></label>
        <input type="text" id="hero-name" [(ngModel)]="hero.name" class="form-control" placeholder="name">
      </div>
    </div>
    `
})

export class AppComponent {
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
