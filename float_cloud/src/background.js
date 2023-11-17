/*global chrome*/

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "TOKEN_FOUND") {
    chrome.storage.local.set({ 'token': message.token }, () => {
      console.log('Token is saved in chrome.storage');
    });
  }
});
