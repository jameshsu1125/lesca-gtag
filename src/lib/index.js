const property = { id: false };

const install = (gid) => {
  const scriptId = 'ga-gtag';
  property.id = gid;

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
};

const gtag = function () {
  window.dataLayer.push(arguments);
};

const pv = function (title) {
  const { id } = property;
  if (!id) {
    console.log('[lesca-gtag]', 'gid not found.');
  }

  gtag('config', id, {
    page_title: title,
    page_path: '/' + title,
  });
};

const event = function (title, category = '') {
  const { id } = property;
  if (!id) {
    console.log('[lesca-gtag]', 'gid not found.');
  }
  gtag('event', `${title}-${category}`, { category });
};

const Gtag = { install, pv, event };
export default Gtag;
