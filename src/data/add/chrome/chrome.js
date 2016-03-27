/* globals chrome */
'use strict';

var background = { // jshint ignore:line
  send: (id, data) => chrome.runtime.sendMessage({
    method: id + '@ad',
    data
  }),
  receive: (id, callback) => chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.method === id + '@ad' && (!sender.url || sender.url.indexOf('background') !== -1)) {
      callback(request.data);
    }
  })
};
var manifest = { // jshint ignore:line
  folder: chrome.tabs ? false : true, // only supported for packaged apps
  support: chrome.tabs ? false : true,
  sandbox: chrome.tabs ? false : true,
  referrer: false
};
