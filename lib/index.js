define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var property = { id: '' };
    var install = function (gid) {
        var scriptId = 'ga-gtag';
        property.id = gid;
        if (document.getElementById(scriptId))
            return;
        var head = document.head;
        var script = document.createElement('script');
        script.id = scriptId;
        script.type = 'text/javascript';
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=".concat(gid);
        head.insertBefore(script, head.firstChild);
        window.dataLayer = window.dataLayer || [];
        gtag('js', new Date());
        gtag('config', gid);
    };
    var insert = function (gid) {
        property.id = gid;
    };
    var gtag = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        window.dataLayer.push(args);
    };
    var pv = function (title) {
        var id = property.id;
        if (!id) {
            console.log('[lesca-gtag]', 'gid not found.');
        }
        gtag('config', id, {
            page_title: title,
            page_path: '/' + title,
        });
    };
    var event = function (title, category) {
        if (category === void 0) { category = ''; }
        var id = property.id;
        if (!id)
            console.error('[lesca-gtag]', 'gid not found.');
        gtag('event', "".concat(title, "-").concat(category), { category: category });
    };
    var Gtag = { install: install, pv: pv, event: event, insert: insert };
    exports.default = Gtag;
});
