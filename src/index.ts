const property = { id: '', debug: false };

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

const install = (gid: string, debug = false) => {
  const scriptId = 'ga-gtag';
  property.id = gid;
  property.debug = debug;

  if (document.getElementById(scriptId)) return;

  const { head } = document;
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gid}`;
  head.insertBefore(script, head.firstChild);

  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());
  gtag('config', gid);
  if (debug) console.log(`%c gid = ${gid}`, 'color: #bada55');
};

const insert = (gid: string) => {
  property.id = gid;
};

const gtag = function (...args: any[]) {
  window.dataLayer.push(args);
};

const pv = function (page_title: string, parameters: Record<string, any> = {}) {
  const { id, debug } = property;
  if (!id) console.warn('[lesca-gtag]', 'gid not found.');
  gtag('event', 'page_view', { page_title, ...parameters });
  if (debug) console.log(`%c pv = ${page_title}`, 'color: #bada55');
};

const event = function (
  page_title: string,
  event_name: string = '',
  parameters: Record<string, any> = {},
) {
  const { id, debug } = property;
  if (!id) console.error('[lesca-gtag]', 'gid not found.');

  gtag('event', `${page_title}-${event_name}`, {
    page_title,
    event_name,
    ...parameters,
  });

  if (debug) console.log(`%c event = ${page_title}-${event_name}`, 'color: #bada55');
};

const Gtag = { install, pv, event, insert, gtag };
export default Gtag;
