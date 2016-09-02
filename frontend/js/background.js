//callback - integer tabID,object changeInfo, Tab tab
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
    if (tab.url.toLowercase().indexOf("flipkart.com") > -1) {
        chrome.pageAction.show(tab.id);
    }
});
