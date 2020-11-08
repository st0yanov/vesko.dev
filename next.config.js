const withSass = require('@zeit/next-sass');

module.exports = withSass({
  poweredByHeader: false,
  trailingSlash: false,
  target: 'serverless',
  env: {
    BASE_URL: 'https://www.vesko.dev'
  },
});
