// Clear unsupported-browser cookies when extension is run
chrome.cookies.remove({url: "https://archive.is", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.vn", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.today", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.fo", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.li", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.md", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.ph", name: "unsupported-browser"});

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (var i = details.requestHeaders.length - 1; i >= 0; i--) {
      if (details.requestHeaders[i].name.toLowerCase() === 'User-Agent'.toLowerCase()) {
        details.requestHeaders.splice(i, 1);
      }
	  if (details.requestHeaders[i].name.toLowerCase() === 'cookie'.toLowerCase()) {
        details.requestHeaders.splice(i, 1);
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  {urls: ["https://archive.is/*", "https://archive.vn/*", "https://archive.today/*", "https://archive.fo/*", "https://archive.li/*", "https://archive.md/*", "https://archive.ph/*"]},
  [ 'blocking', 'requestHeaders', 'extraHeaders']
);
