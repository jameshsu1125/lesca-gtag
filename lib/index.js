"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var property = {
  id: '',
  debug: false
};
var install = function install(gid) {
  var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var scriptId = 'ga-gtag';
  property.id = gid;
  property.debug = debug;
  if (document.getElementById(scriptId)) return;
  var _document = document,
    head = _document.head;
  var script = document.createElement('script');
  script.id = scriptId;
  script.type = 'text/javascript';
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=".concat(gid);
  head.insertBefore(script, head.firstChild);
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  gtag('config', gid);
  if (debug) console.warn("gid = ".concat(gid));
};
var insert = function insert(gid) {
  property.id = gid;
};
var gtag = function gtag() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  window.dataLayer.push(arguments);
};
var pv = function pv(title) {
  var id = property.id,
    debug = property.debug;
  if (!id) {
    console.log('[lesca-gtag]', 'gid not found.');
  }
  gtag('config', id, {
    page_title: title,
    page_path: '/' + title
  });
  if (debug) {
    console.warn("pv = ".concat(title));
  }
};
var event = function event(title) {
  var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var id = property.id,
    debug = property.debug;
  if (!id) console.error('[lesca-gtag]', 'gid not found.');
  gtag('event', "".concat(title, "-").concat(category), {
    event_category: category,
    event_label: label
  });
  if (debug) console.warn("event = ".concat(title, "-").concat(category));
};
var Gtag = {
  install: install,
  pv: pv,
  event: event,
  insert: insert
};
var _default = Gtag;
exports["default"] = _default;