"use strict";
/// <reference path="../node_modules/sp-pnp-js/dist/pnp.d.ts" />
//export = 0;
Object.defineProperty(exports, "__esModule", { value: true });
var sp_pnp_js_1 = require("sp-pnp-js");
var Alerter = (function () {
    function Alerter() {
    }
    Alerter.Alert = function () {
        // see https://github.com/SharePoint/PnP-JS-Core/issues/186
        // see https://github.com/SharePoint/PnP-JS-Core/pull/127
        sp_pnp_js_1.default.setup({
            headers: {
                "Accept": "application/json; odata=verbose"
            }
        });
    };
    return Alerter;
}());
exports.Alerter = Alerter;
sp_pnp_js_1.default.sp.web.select("Title").get().then(function (r) {
    alert(r.Title);
});

//# sourceMappingURL=Alerter.js.map
