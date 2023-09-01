function handleMessage(message) {
    if (message && message.message == 'fml-detected') {
        fml = message;
        browser.browserAction.setBadgeText({ text: "1"});
        browser.browserAction.enable();
    }
}

function downloadFml() {
    browser.downloads.download({
        url: fml.url,
        filename: fml.filename,
        saveAs : true
    });
}

let fml;
browser.runtime.onMessage.addListener(handleMessage);
browser.browserAction.onClicked.addListener(downloadFml);
browser.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    if (changeInfo.status == "loading") {
        browser.browserAction.disable();
        browser.browserAction.setBadgeText({ text: ""});
    }
})