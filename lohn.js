#!/usr/bin/env nodejs
const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
function getSmsCode(){
    var sms = readlineSync.question('Enter your Smscode: ');
    return sms;
  
}

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true
  })
  const page = await browser.newPage()
  const CREDS = require('./cred');
  await page.setViewport({ width: 1920, height: 1024 });
  await page.goto('http://www.datev.de/ano/');
  await page.click('#loginContainer > div > ul > li:nth-child(1) > a > div > div.media-body');
  await page.waitForSelector('#username')
  await page.click('#username');
  await page.keyboard.type(CREDS.username);
  await page.click('#password');
  await page.keyboard.type(CREDS.password);
  await page.click('body > main > form > button');
  await page.waitForNavigation();
  await page.click(' #mTAN');
  await page.keyboard.type(getSmsCode());
  await page.click('body > main > form > button');
  await delay(5000);
  await page.waitForSelector('#navSTARTHEADLINEDOCS > a');
  await page.click('#navSTARTHEADLINEDOCS > a');
  await page.waitForSelector('.analysisGrid table > tbody > tr > td:nth-child(2) > div.analysisCaption');
  await page.click('.analysisGrid table > tbody > tr > td:nth-child(1) > input[type="checkbox"]');
  await page.click("#btnDownloadZip");
  await delay(2000);
  await page.click('#top > div.infobar > ul > li:nth-child(2) > a');
  await browser.close();
}


run();
