# Instagram Minimal Extension

The Instagram Minimal Extension is a Chrome extension designed to remove the `<main>` section of the Instagram website, allowing users to focus on posting and messaging on Instagram without distractions from the feed. This extension uses JavaScript and a `MutationObserver` to dynamically remove specified elements.

## Installation

To install and use the Instagram Minimal Extension in your Chrome browser, follow these steps:

### 1. Download the Extension

Clone this repository or download the extension files to a local folder on your computer.

### 2. Load the Extension into Chrome

1. Open the Google Chrome browser.
2. Navigate to `chrome://extensions/` in your Chrome browser.
3. Enable "Developer Mode" by toggling the switch in the upper right corner of the Extensions page.
4. Click on "Load unpacked" and select the directory containing your downloaded extension files.

### 3. Using the Extension

Once loaded, the extension will automatically remove the `<main>` section from any Instagram page you visit. There's no need for any interaction. Simply navigate to Instagram, and the extension will function in the background.

## Files Included

- `manifest.json`: Contains metadata and configuration settings for the Chrome extension.
- `content_script.js`: The JavaScript file that implements the functionality to remove the `<main>` section.

## How It Works

The extension uses a `MutationObserver` in `content_script.js` to monitor changes in the DOM of the Instagram page. When it detects additions or changes, it automatically searches for elements with a `role` attribute set to "main" and removes them. This ensures that even dynamically loaded content that matches the criteria is removed.

## Troubleshooting

If you notice that the extension is not functioning as expected:
- Ensure that the extension is enabled in `chrome://extensions/`.
- Check the Developer Console for any errors or logs that might provide more information.
- Reload the extension by clicking the reload icon on the extension card in the Chrome Extensions page.

For any updates or issues, refer to the GitHub repository or submit an issue there.
