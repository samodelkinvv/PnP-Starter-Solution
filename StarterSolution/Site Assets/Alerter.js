/// <reference path="../node_modules/sp-pnp-js/dist/pnp.d.ts" />
//export = 0;
define(["require", "exports", "sp-pnp-js", "./Table"], function (require, exports, sp_pnp_js_1, Table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var deployedTable = new Table_1.Table();
    alert(deployedTable.data);
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
            sp_pnp_js_1.default.sp.web.select("Title").get().then(function (r) {
                alert(r.Title);
            });
        };
        return Alerter;
    }());
    exports.Alerter = Alerter;
});

//# sourceMappingURL=Alerter.js.map
