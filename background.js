// Clear unsupported-browser cookies when extension is run
chrome.cookies.remove({url: "https://archive.is", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.vn", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.today", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.fo", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.li", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.md", name: "unsupported-browser"});
chrome.cookies.remove({url: "https://archive.ph", name: "unsupported-browser"});
