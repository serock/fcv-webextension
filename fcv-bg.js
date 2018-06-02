"use strict";

const endOfYear2035 = 2082776399;

const cookie1Details = {
  url:    "https://www.example.com/",
  name:   "cookie1Name",
  value:  "cookie1Value",
  domain: "example.com",
  path:   "/",
  expirationDate: endOfYear2035
};

function ensureCookie1IsSet(cookie) {
  if (cookie === null || cookie.value !== cookie1Details.value) {
    chrome.cookies.set(cookie1Details);
  }
}

function getCookies() {
  var cookie1Criteria = {
    url:  cookie1Details.url,
    name: cookie1Details.name
  };
  chrome.cookies.get(cookie1Criteria, ensureCookie1IsSet);
}

browser.runtime.onStartup.addListener(getCookies);

