exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  const { setWebpackConfig } = actions;

  if (stage === 'build-html' || stage === 'develop-html') {
    setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap\/js\/dist\/scrollspy/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
