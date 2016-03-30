System.register(['angular2/platform/browser', './app.root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_root_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_root_1_1) {
                app_root_1 = app_root_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_root_1.RootComponent);
        }
    }
});
//# sourceMappingURL=main.js.map