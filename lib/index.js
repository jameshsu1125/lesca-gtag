"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var property = {
  id: false
};

var install = function install(gid) {
  var scriptId = 'ga-gtag';
  property.id = gid;
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
};

var gtag = function gtag() {
  window.dataLayer.push(arguments);
};

var pv = function pv(title) {
  var id = property.id;

  if (!id) {
    console.log('[lesca-gtag]', 'gid not found.');
  }

  gtag('config', id, {
    page_title: title,
    page_path: '/' + title
  });
};

var event = function event(title) {
  var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var id = property.id;

  if (!id) {
    console.log('[lesca-gtag]', 'gid not found.');
  }

  gtag('event', "".concat(title, "-").concat(category), {
    category: category
  });
};

var Gtag = {
  install: install,
  pv: pv,
  event: event
};
var _default = Gtag;
exports["default"] = _default;