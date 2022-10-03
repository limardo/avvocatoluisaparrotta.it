const React = require('react');

exports.onPreRenderHTML = ({ getPostBodyComponents, replacePostBodyComponents }, pluginOptions) => {
  const { disableOnDev, cookieHubId, categories } = pluginOptions;

  if (process.env.NODE_ENV === 'development' && disableOnDev && !cookieHubId) {
    return null;
  }

  const cookiehubScript = React.createElement('script', {
    key: 'cookiehub',
    src: `https://cookiehub.net/c2/${cookieHubId}.js`,
    async: true
  });

  const postBodyComponentWithCookiehub = [...getPostBodyComponents(), cookiehubScript];

  replacePostBodyComponents(postBodyComponentWithCookiehub);
};
