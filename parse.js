// Inform the background page that
// this tab should have a page-action
chrome.runtime.sendMessage({
  from:    'hotelPage',
  subject: 'showPageAction'
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'popup') && (msg.subject === 'hotelInfo')) {
    // Collect the necessary data
    var domInfo = {
      hotelName:   $("div.details-description-hotelname.ng-binding").text().split(" area",1),
      taRating:  $("h6.ng-binding").text().split(" ",1),
      taReviewLB: parseInt($("div.total-reviews.ng-binding.ng-scope").text().split("(")[1]),
      taReviewUB: parseInt($("div.total-reviews.ng-binding.ng-scope").text().split("- ")[1]),
      recPercent: $("span.hw-recommendation-percentage").text(),
      hwRating: $("div.details-summary-ratings > img").attr("data-star").replace(".","")
    };
    
    // var areaUrl = domInfo.hotelName.split(" ");
    

    // Directly respond to the sender (popup),
    // through the specified callback */
    response(domInfo);
  }
});

// #div14247 > p:nth-child(2) > b:nth-child(1) > img

