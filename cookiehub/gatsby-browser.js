exports.onClientEntry = (_, pluginOptions = {}) => {
  if (process.env.NODE_ENV !== `production` && !pluginOptions.cookieHubId) {
    return null;
  }

  const cookieNames = (pluginOptions.categories || []).reduce((a, c) => {
    a[c.categoryName] = c.cookieName;
    return a;
  }, {});

  const handleCategoryUserInput = (categoryName, allowed) => {
    let cookieName = cookieNames[categoryName];

    if (cookieName === undefined) {
      cookieName = `cookiehub-${categoryName}-allowed`;
    }

    document.cookie = `${cookieName}=${allowed};path=/`;
  };

  const cpm = {
    onInitialise: function (status) {
      status.categories.forEach((cat) => {
        handleCategoryUserInput(cat.id, cat.value);
      });
    },
    onAllow: function (category) {
      handleCategoryUserInput(category, true);
    },
    onRevoke: function (category) {
      handleCategoryUserInput(category, false);
    }
  };

  const handleLoadCookieHub = (h, u, b) => {
    const d = h.getElementsByTagName('script')[0];
    const e = h.createElement('script');

    e.async = true;
    e.src = `https://cookiehub.net/c2/${pluginOptions.cookieHubId}.js`;
    e.onload = () => u.cookiehub.load(b);

    d.parentNode.insertBefore(e, d);
  };

  handleLoadCookieHub(document, window, cpm);
};
