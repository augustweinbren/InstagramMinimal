// popup.js
document.getElementById('toggleButton').addEventListener('click', function() {
    // Send a message to content_script.js to toggle the view
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "toggle"});
    });
});

