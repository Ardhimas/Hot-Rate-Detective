// Update the relevant fields with the new data
function setDOMInfo(info, possibilities) {
  document.getElementById('hotelName').textContent   = info.hotelName;
  document.getElementById('taRating').textContent  = info.taRating;
  document.getElementById('taReviewUB').textContent = info.taReviewUB;
  document.getElementById('taReviewLB').textContent = info.taReviewLB;
  document.getElementById('recPercent').textContent = info.recPercent;
  var hotelList = $.makeArray(possibilities).join();
  document.getElementById('possibleHotels').textContent = hotelList;
  console.log(possibilities);
}

function matchHotels(info) {
  var areaName = String(info.hotelName).replace(/ /g, "-").toLowerCase();
  console.log(areaName);
  var areaUrl = "http://hotwirehotellist.com/" + areaName + "/";
  var possibilities = [];
  var dfd = $.Deferred();
  dfd.done(function(){
    setDOMInfo(info,possibilities);
  })
  $.get(areaUrl, function(data) {
    // load response text into a new page element
    var tempPage = document.createElement("html");
    tempPage.innerHTML = data;
    
    
    $(tempPage).find("[id^='div'] > p:nth-child(2)").each(function(){
      var knownRecPercent = $(this).contents().filter(function() {
        return this.nodeType == 3;
      }).text().split(" recommended",1)[0].trim();
      // console.log(knownRecPercent);
      if (info.recPercent == knownRecPercent) {
        // possibilities.push(knownRecPercent);
        var knownHotel = $(this).siblings().text().split(" Monday")[0].trim();
        possibilities.push(knownHotel);
      }
    });
    dfd.resolve();
    console.log(possibilities);
    // find the desired element within the new page element
  });
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
        matchHotels);
  });
});
