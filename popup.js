let playbackRateRange = document.getElementById('playbackRateRange');
let playbackRate = document.getElementById('playbackRate');

function setPlaybackRate() {
  playbackRate.textContent = playbackRateRange.value;
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {action: "setPlaybackRate", playbackRate: playbackRateRange.value});
  });
}
playbackRateRange.addEventListener('change', setPlaybackRate);

chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, {action: "getPlaybackRate"}, function(response) {
    playbackRateRange.value = response.playbackRate;
    playbackRate.textContent = playbackRateRange.value;
  });
});
