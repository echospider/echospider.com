/*Component Default view For SpaRoute */
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
//---------Import Angular2------------
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
//---------Import External Components---------
var home_1 = require("./home/home");
var about_1 = require("./home/about");
var contact_1 = require("./home/contact");
//---------Declare Components---------
var MainComponent = (function () {
    function MainComponent(_compiler) {
        this._compiler = _compiler;
        this.title = 'Welcome to Echospider';
        this._compiler.clearCache();
    }
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: 'echospider-app',
        directives: [router_1.ROUTER_DIRECTIVES],
        templateUrl: './app/main.html',
        providers: [
            router_1.ROUTER_PROVIDERS,
            //provide(APP_BASE_HREF, { useValue: '/' })
            core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
        ]
    }),
    router_1.RouteConfig([
        { path: '/Home', name: 'Home', component: home_1.Home, useAsDefault: true },
        { path: '/Contact', name: 'Contact', component: contact_1.Contact },
        { path: '/About', name: 'About', component: about_1.About }
    ]),
    __metadata("design:paramtypes", [core_1.Compiler])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=app.js.map