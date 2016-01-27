System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                    this.heroes = HEROES;
                }
                AppComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h2>My Heroes</h2>\n    <ul class=\"list-group heroes\">\n      <li *ngFor=\"#hero of heroes\" class=\"list-group-item\" [class.active]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n          <span class=\"badge\">{{hero.id}}</span>\n          {{hero.name}}\n      </li>\n    </ul>\n\n\n    <div *ngIf=\"selectedHero\">\n      <hr>\n      <h2>{{title}}</h2>\n      <h3>{{selectedHero.id}}: {{selectedHero.name}} details!</h3>\n      <div>\n        <div class=\"form-group\">\n          <label for=\"hero-id\"><strong>id: </strong></label>\n          <input type=\"text\" id=\"hero.id\" [(ngModel)]=\"selectedHero.id\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"hero-name\"><strong>name: </strong></label>\n          <input type=\"text\" id=\"hero-name\" [(ngModel)]=\"selectedHero.name\" class=\"form-control\" placeholder=\"name\">\n        </div>\n      </div>\n    </div>\n    ",
                        styles: ["\n    .heroes li {\n      margin: .10em;\n      cursor: pointer;\n    }\n    .heroes li:hover {\n      border: 1px solid #df691a;\n    }\n    .badge {\n      border: 1px solid #df691a;\n    }\n  "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            HEROES = [
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
        }
    }
});
//# sourceMappingURL=app.component.js.map