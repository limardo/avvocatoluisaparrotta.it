exports.onClientEntry = (_, pluginOptions = {}) => {
  const { disableOnDev, cookieHubId, categories } = pluginOptions;

  if (process.env.NODE_ENV === 'development' && disableOnDev && !cookieHubId) {
    return null;
  }

  const handleLoadCookieHub = (h, u) => {
    const d = h.getElementsByTagName('script')[0];
    const e = h.createElement('script');

    e.async = true;
    e.src = `https://cdn.cookiehub.eu/c2/${cookieHubId}.js`;
    e.onload = () => {
      u.dataLayer = u.dataLayer || [];

      function gtag() {
        u.dataLayer.push(arguments);
      }

      gtag('consent', 'default', {
        security_storage: 'granted',
        functionality_storage: 'denied',
        personalization_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500
      });

      h.addEventListener('DOMContentLoaded', (event) => {
        const cpm = {};
        u.cookiehub.load(cpm);
      });
    };

    d.parentNode.insertBefore(e, d);
  };

  handleLoadCookieHub(document, window);
};
