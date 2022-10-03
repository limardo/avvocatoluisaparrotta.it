const React = require('react');

exports.onPreRenderHTML = ({ getPostBodyComponents, replacePostBodyComponents }, pluginOptions) => {
  const { disableOnDev, cookieHubId } = pluginOptions;

  if (process.env.NODE_ENV === 'development' && disableOnDev && !cookieHubId) {
    return null;
  }

  const cookiehubComponent = React.createElement('script', {
    key: 'cookiehub',
    src: `https://cookiehub.net/c2/${cookieHubId}.js`,
    async: true
  });

  const postBodyComponentWithCookiehub = [...getPostBodyComponents(), cookiehubComponent];

  replacePostBodyComponents(postBodyComponentWithCookiehub);
};
