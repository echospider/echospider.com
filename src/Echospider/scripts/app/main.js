/*This is the spa bootstrap File*/
"use strict";
//---------Import Angular2------------
var browser_1 = require("angular2/platform/browser");
//---------Import External Components(Main Component)---------
var app_1 = require("./app");
//---------Bootstrap Component---------
//enableProdMode();
browser_1.bootstrap(app_1.MainComponent);
var Main = (function () {
    function Main(_compiler) {
        this._compiler = _compiler;
        this._compiler.clearCache();
    }
    return Main;
}());
exports.Main = Main;
//# sourceMappingURL=main.js.map