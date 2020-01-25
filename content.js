browser.runtime.onMessage.addListener(captureSelection);

function captureSelection(message) {
    if (message.command === "captureSelectionRequest") {
        console.log("captureSelection");
        browser.runtime.sendMessage({command: "captureSelectionResponse", value: window.getSelection().toString()});
    }
}
