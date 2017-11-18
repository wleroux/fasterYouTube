  console.log("Loading...");
let video = document.getElementsByClassName("video-stream html5-main-video")[0];
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "getPlaybackRate") {
    sendResponse({playbackRate: video.playbackRate});
  } else if (request.action == "setPlaybackRate") {
    video.playbackRate = request.playbackRate;
    sendResponse({});
  }
});
