const puppeteer = require("puppeteer");

takeScreenShot = async (urlString) => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1255,
    height: 800,
  });

  const options = {
    path: `public/images/screenshoot-${Date.now()}.jpg`,
    omitBackground: true,
  };

  await page.setDefaultNavigationTimeout(0);

  await page.goto(urlString);

  await page.screenshot(options);

  await browser.close();
  return options.path.split("public/").pop();
};

module.exports = takeScreenShot;
