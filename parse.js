// $(document).ready(function(){
//   $("div.details-description-hotelname.ng-binding").hide();
//   $("h6.ng-binding").hide();
//   $("div.total-reviews.ng-binding.ng-scope").hide();
// });

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
      hotelName:   $("div.details-description-hotelname.ng-binding").length,
      taRating:  $("h6.ng-binding").get(),
      taReviews: $("div.total-reviews.ng-binding.ng-scope").get(0)
    };

    // Directly respond to the sender (popup),
    // through the specified callback */
    response(domInfo);
  }
});