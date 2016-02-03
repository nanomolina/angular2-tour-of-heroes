System.register(['angular2/core', './hero_detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h2>My Heroes</h2>\n    <ul class=\"list-group heroes\">\n      <li *ngFor=\"#hero of heroes\" class=\"list-group-item\"\n        [class.active]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n          <span class=\"badge\">{{hero.id}}</span>\n          {{hero.name}}\n      </li>\n    </ul>\n\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    ",
                        styles: ["\n    .heroes li {\n      margin: .10em;\n      cursor: pointer;\n    }\n    .heroes li:hover {\n      border: 1px solid #df691a;\n    }\n    .badge {\n      border: 1px solid #df691a;\n    }\n  "],
                        directives: [hero_detail_component_1.HeroDetailComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map