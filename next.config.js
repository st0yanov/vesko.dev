const withSass = require('@zeit/next-sass');

module.exports = withSass({
  poweredByHeader: false,
  trailingSlash: true,
  target: 'serverless',
  env: {
    BASE_URL: 'https://www.vesko.dev'
  },
});
