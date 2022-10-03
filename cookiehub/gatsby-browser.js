exports.onClientEntry = (_, pluginOptions = {}) => {
  const { categories } = pluginOptions;

  if (!window.cookiehub) {
    return null;
  }

  const cookieNames = (categories || []).reduce((a, c) => {
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

  window.cookiehub.load(cpm);
};
