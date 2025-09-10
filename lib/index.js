const a = { id: "", debug: !1 }, s = (o, t = !1) => {
  const e = "ga-gtag";
  if (a.id = o, a.debug = t, document.getElementById(e)) return;
  const { head: c } = document, n = document.createElement("script");
  n.id = e, n.type = "text/javascript", n.async = !0, n.src = `https://www.googletagmanager.com/gtag/js?id=${o}`, c.insertBefore(n, c.firstChild), window.dataLayer = window.dataLayer || [], window.gtag("js", /* @__PURE__ */ new Date()), window.gtag("config", o), t && console.log(`%c gid = ${o}`, "color: #bada55");
}, d = (o) => {
  a.id = o;
}, g = function(o, t = {}) {
  const { id: e, debug: c } = a;
  e || console.warn("[lesca-gtag]", "gid not found."), window.gtag("event", "page_view", { page_title: o, ...t }), c && console.log(`%c pv = ${o}`, "color: #bada55");
}, i = function(o, t = "", e = {}) {
  const { id: c, debug: n } = a;
  c || console.error("[lesca-gtag]", "gid not found."), window.gtag("event", `${o}-${t}`, {
    page_title: o,
    event_name: t,
    ...e
  }), n && console.log(`%c event = ${o}-${t}`, "color: #bada55");
}, r = { install: s, pv: g, event: i, insert: d, gtag: window.gtag };
export {
  r as default
};
