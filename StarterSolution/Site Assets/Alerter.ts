/// <reference path="../node_modules/sp-pnp-js/dist/pnp.d.ts" />
//export = 0;

import pnp from "sp-pnp-js";

export class Alerter {
	static Alert() {
		// see https://github.com/SharePoint/PnP-JS-Core/issues/186
		// see https://github.com/SharePoint/PnP-JS-Core/pull/127
		pnp.setup({
			headers: {
				"Accept": "application/json; odata=verbose"
			;}
		})
		pnp.sp.web.select("Title").get().then(r => {
        	alert(r.Title);
        });
	}
} 