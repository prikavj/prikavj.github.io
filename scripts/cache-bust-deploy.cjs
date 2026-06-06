const fs = require('fs');

const htmlPath = 'dist/index.html';
const version = Date.now();

let html = fs.readFileSync(htmlPath, 'utf8');
html = html
  .replace(/(src="\/assets\/[^\"]+\.js)(?=")/g, `$1?v=${version}`)
  .replace(/(href="\/assets\/[^\"]+\.css)(?=")/g, `$1?v=${version}`);

fs.writeFileSync(htmlPath, html);
