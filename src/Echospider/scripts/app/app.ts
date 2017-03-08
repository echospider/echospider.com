/*Component Default view For SpaRoute */

//---------Import Angular2------------
import {Component, provide, Compiler } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from 'angular2/router';

//---------Import External Components---------
import {Home} from './home/home';
import { About } from './home/about';
import { Contact } from './home/contact';



//---------Declare Components---------
@Component({
    selector: 'echospider-app',
    directives: [ROUTER_DIRECTIVES], //decorate link 
    templateUrl: './app/main.html',
    providers: [
        ROUTER_PROVIDERS, 
        //provide(APP_BASE_HREF, { useValue: '/' })
        provide(LocationStrategy, { useClass: HashLocationStrategy })
    ]
})

//---------Declare Route Config---------
@RouteConfig([
        { path: '/Home', name: 'Home', component: Home, useAsDefault: true },
        { path: '/Contact', name: 'Contact', component: Contact },
        { path: '/About', name: 'About', component: About }
    
])


//---------Export This Component Class---------
export class MainComponent {
    title: string;
    constructor(private _compiler: Compiler) {
        this.title = 'Welcome to Echospider';
        this._compiler.clearCache();
    }
}