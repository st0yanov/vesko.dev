const fs = require("fs");
const path = require('path');

const sitemap = require('nextjs-sitemap-generator');
 
const BUILD_ID = fs.readFileSync('.next/BUILD_ID').toString();

sitemap({
  baseUrl: 'https://www.vesko.dev',
  pagesDirectory: path.join(__dirname, '.next', 'serverless', 'pages'),
  targetDirectory: 'public/',
  ignoredPaths: [
    '[slug]',
    '[page]'
  ],
  ignoreIndexFiles: true,
});
