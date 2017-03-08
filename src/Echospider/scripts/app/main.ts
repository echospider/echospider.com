/*This is the spa bootstrap File*/

//---------Import Angular2------------
import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode, provide, Compiler } from 'angular2/core';

//---------Import External Components(Main Component)---------
import {MainComponent} from './app';

//---------Bootstrap Component---------
//enableProdMode();
bootstrap(MainComponent);


export class Main {
    constructor(private _compiler: Compiler) {
        this._compiler.clearCache();
    }
}