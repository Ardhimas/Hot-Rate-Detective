This is a Chrome extension that looks at Hotwire's Hot Rates hotel listings and uses information from http://hotwirehotellist.com and matches recommendation percentages and star ratings in order to determine possibilities for the unknown hotels. Initially, the idea was to use TripAdvisor information in order to perform the filtering, but due to the lack of a public API as well as the availability of a website that provides known listings, I decided to use that website instead. I also found that those two pieces of information were generally sufficient in order to narrow the possibilities down to one hotel, and so using TripAdvisor data would be redundant.

In order to see how use this extension, clone or download this repository. And then, follow the instructions here:
https://developer.chrome.com/extensions/getstarted
1. Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the Tools menu to get to the same place).
2. Ensure that the Developer mode checkbox in the top right-hand corner is checked.
3. Click Load unpacked extension… to pop up a file-selection dialog.
4. Select the folder of this extension

In order to see how it works:
1. Go to https://www.hotwire.com/ and perform a search for a hotel.
2. Go to the Hot Rates tab and click a listing that you want uncovered.
3. Click the extension button and wait for the popup to appear and show you the possibilities.

Here are a couple of screenshots showing how the extension appears:
![screenshot 2016-04-04 at 2 21 28 am](https://cloud.githubusercontent.com/assets/5238654/14448876/776072d2-0032-11e6-950d-68a50ccccf07.png)
![screenshot 2016-04-04 at 2 24 03 am](https://cloud.githubusercontent.com/assets/5238654/14448877/77635d4e-0032-11e6-870c-bf10fc816a27.png)