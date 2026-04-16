const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', err => console.log('ERR:', err.toString()));
  await page.goto('http://localhost:8234/index.html');
  await new Promise(r => setTimeout(r, 6000));
  await browser.close();
})();
