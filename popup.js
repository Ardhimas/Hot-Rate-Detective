// Update the relevant fields with the new data
function setDOMInfo(info) {
  document.getElementById('hotelName').textContent   = info.hotelName;
  document.getElementById('taRating').textContent  = info.taRating;
  document.getElementById('taReviewUB').textContent = info.taReviewUB;
  document.getElementById('taReviewLB').textContent = info.taReviewLB;
}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function () {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'hotelInfo'},
        // ...also specifying a callback to be called
        //    from the receiving end (content script)
        setDOMInfo);
  });
});