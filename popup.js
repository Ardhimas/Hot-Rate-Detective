// Update the relevant fields with the new data
function setDOMInfo(info) {
  document.getElementById('hotelName').textContent   = info.hotelName;
  document.getElementById('taRating').textContent  = info.taRating;
  document.getElementById('taReviewUB').textContent = info.taReviewUB;
  document.getElementById('taReviewLB').textContent = info.taReviewLB;
  document.getElementById('recPercent').textContent = info.recPercent;
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

$.get("http://hotwirehotellist.com/downtown-austin-and-town-lake/", function(data) {
    // load response text into a new page element
    var fakePage = document.createElement("html");
    fakePage.innerHTML = data;

    // find the desired element within the new page element
    var statone = $(fakePage).find("#div5431 > h4 > a").html();
    console.log(statone);
});