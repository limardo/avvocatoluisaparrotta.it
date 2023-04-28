import fs from 'fs';
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

const DESKTOP_USERAGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36';

const DESKTOP_EMULATION_METRICS = {
  mobile: false,
  width: 1350,
  height: 940,
  deviceScaleFactor: 1,
  disabled: false
};

const configDesktop = {
  extends: 'lighthouse:default',
  settings: {
    formFactor: 'desktop',
    screenEmulation: DESKTOP_EMULATION_METRICS,
    emulatedUserAgent: DESKTOP_USERAGENT,
    skipAudits: ['uses-http2', 'bf-cache']
  }
};

const configMobile = {
  extends: 'lighthouse:default',
  settings: {
    skipAudits: ['uses-http2', 'bf-cache']
  }
};

const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
const options = { logLevel: 'info', output: 'html', port: chrome.port };
const runnerDesktopResult = await lighthouse('http://localhost:9000', options, configDesktop);
const runnerMobileResult = await lighthouse('http://localhost:9000', options, configMobile);

const reportDesktopHtml = runnerDesktopResult.report;
const reportMobileHtml = runnerMobileResult.report;
fs.writeFileSync('report_desktop.html', reportDesktopHtml);
fs.writeFileSync('report_mobile.html', reportMobileHtml);

console.log('Desktop Performance score was', runnerDesktopResult.lhr.categories.performance.score * 100);
console.log('Mobile Performance score was', runnerMobileResult.lhr.categories.performance.score * 100);

await chrome.kill();
