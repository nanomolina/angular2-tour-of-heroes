import {Component} from 'angular2/core';
import {Hero} from './hero'

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <hr>
      <h2>{{title}}</h2>
      <h3>{{hero.id}}: {{hero.name}} details!</h3>
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
    </div>
  `,
  inputs: ['hero'],
})

export class HeroDetailComponent {
  public hero: Hero;
}
