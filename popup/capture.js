function onSuccess(tabs) {
    var tab = tabs[0];
    document.getElementById("url").value = tab.url;
    browser.tabs.sendMessage(tab.id, {command: "captureSelectionRequest"});
}

function onError(error) {
    console.log("Error: " + error);
}

function captureSelectionResponse(message) {
    if (message.command === "captureSelectionResponse") {
        document.getElementById("capture").value = message.value;
    }
}

browser.tabs.query({active: true, currentWindow: true}).then(onSuccess, onError);
browser.runtime.onMessage.addListener(captureSelectionResponse);
