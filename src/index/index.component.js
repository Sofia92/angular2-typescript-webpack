"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var IndexComponent = (function () {
    function IndexComponent() {
        this.title = 'Welcome to liking';
    }
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'index',
            template: "\n\t\t<div class=\"content\">\n\t\t<div class=\"form-group\">\n\t\t    <h1>{{title}}</h1>\n        </div>\n        <div class=\"form-group well-lg\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\">\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default\">Search !</button>\n                </span>\n            </div>\n        </div>\t    \n\t\t</div>\n\t",
            styleUrls: ['./src/public/app.css']
        }), 
        __metadata('design:paramtypes', [])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map