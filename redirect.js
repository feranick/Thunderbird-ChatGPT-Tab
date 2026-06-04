browser.spacesToolbar.addButton('ChatGPT', {
    title: browser.i18n.getMessage("toolbarButtonTitle"),
    defaultIcons: "skin/chatgpt_icon.svg",
    url: "https://chatgpt.com/"
});

browser.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (let header of details.requestHeaders) {
      if (header.name.toLowerCase() === "user-agent") {
        header.value = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:147.0) Gecko/20100101 Firefox/147.0";
        break;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["https://chatgpt.com/*", "https://*.openai.com/*"] },
  ["blocking", "requestHeaders"]
);

// Create the context menu item
browser.menus.create({
  id: "send-to-chatgpt",
  title: browser.i18n.getMessage("contextMenuTitle"),
  contexts: ["selection"]
});

// Add a listener for when the menu item is clicked
browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "send-to-chatgpt" && info.selectionText) {
    // Encode the selected text
    const query = encodeURIComponent(info.selectionText);
    
    // Open ChatGPT with our custom URL parameter
    const chatgptUrl = `https://chatgpt.com/?prompt=${query}`;
    browser.tabs.create({ url: chatgptUrl });
  }
});
