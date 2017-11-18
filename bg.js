chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url && tab.url.indexOf('youtube.com') !== -1) {
    chrome.pageAction.show(tabId);
  } else {
    chrome.pageAction.hide(tabId);
  }
});
