"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var property = { id: '', debug: false };
var install = function (gid, debug) {
    if (debug === void 0) { debug = false; }
    var scriptId = 'ga-gtag';
    property.id = gid;
    property.debug = debug;
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
    if (debug)
        console.log("%c gid = ".concat(gid), 'color: #bada55');
};
var insert = function (gid) {
    property.id = gid;
};
var gtag = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    window.dataLayer.push(arguments);
};
var pv = function (title) {
    var id = property.id, debug = property.debug;
    if (!id) {
        console.warn('[lesca-gtag]', 'gid not found.');
    }
    gtag('event', 'page_view', {
        page_path: '/' + title,
        page_title: title,
    });
    if (debug) {
        console.log("%c pv = ".concat(title), 'color: #bada55');
    }
};
var event = function (title, category, label) {
    if (category === void 0) { category = ''; }
    if (label === void 0) { label = ''; }
    var id = property.id, debug = property.debug;
    if (!id)
        console.error('[lesca-gtag]', 'gid not found.');
    gtag('event', "".concat(title, "-").concat(category), {
        event_category: category,
        event_label: label,
        event_value: label,
    });
    if (debug)
        console.log("%c event = ".concat(title, "-").concat(category), 'color: #bada55');
};
var Gtag = { install: install, pv: pv, event: event, insert: insert, gtag: gtag };
exports.default = Gtag;
