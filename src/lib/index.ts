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
  window.dataLayer.push(arguments);
};

const pv = function (title: string) {
  const { id, debug } = property;
  if (!id) {
    console.warn('[lesca-gtag]', 'gid not found.');
  }

  gtag('event', 'page_view', {
    page_path: '/' + title,
    page_title: title,
  });

  if (debug) {
    console.log(`%c pv = ${title}`, 'color: #bada55');
  }
};

const event = function (title: string, category: string = '', label = '') {
  const { id, debug } = property;
  if (!id) console.error('[lesca-gtag]', 'gid not found.');

  gtag('event', `${title}-${category}`, {
    event_category: category,
    event_label: label,
    event_value: label,
  });

  if (debug) console.log(`%c event = ${title}-${category}`, 'color: #bada55');
};

const Gtag = { install, pv, event, insert, gtag };
export default Gtag;
