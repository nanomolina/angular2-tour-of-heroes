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
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent() {
                }
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n    <div *ngIf=\"hero\">\n      <hr>\n      <h2>{{title}}</h2>\n      <h3>{{hero.id}}: {{hero.name}} details!</h3>\n      <div>\n        <div class=\"form-group\">\n          <label for=\"hero-id\"><strong>id: </strong></label>\n          <input type=\"text\" id=\"hero.id\" [(ngModel)]=\"hero.id\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"hero-name\"><strong>name: </strong></label>\n          <input type=\"text\" id=\"hero-name\" [(ngModel)]=\"hero.name\" class=\"form-control\" placeholder=\"name\">\n        </div>\n      </div>\n    </div>\n  ",
                        inputs: ['hero'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero_detail.component.js.map