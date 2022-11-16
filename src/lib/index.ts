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
  if (debug) console.warn(`gid = ${gid}`);
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
    console.log('[lesca-gtag]', 'gid not found.');
  }

  gtag('config', id, {
    page_title: title,
    page_path: '/' + title,
  });

  if (debug) {
    console.warn(`pv = ${title}`);
  }
};

const event = function (title: string, category: string = '', label = '') {
  const { id, debug } = property;
  if (!id) console.error('[lesca-gtag]', 'gid not found.');
  gtag('event', `${title}-${category}`, { event_category: category, event_label: label });
  if (debug) console.warn(`event = ${title}-${category}`);
};

const Gtag = { install, pv, event, insert };
export default Gtag;
