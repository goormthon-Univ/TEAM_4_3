/*global chrome */

const token = localStorage.getItem('accessToken'); 
if (token) {
  chrome.runtime.sendMessage({ type: "TOKEN_FOUND", token: token });
}
