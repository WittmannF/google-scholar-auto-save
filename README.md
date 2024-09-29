# Google Scholar Auto Save

## Overview

Google Scholar Auto Save is a JavaScript-based tool designed to automate the process of saving articles from Google Scholar search results to a specified reading list. This script streamlines the task of manually clicking through and saving multiple articles, saving time for researchers and academics.

## Examples
### Simple Example - Save to Default Reading List
https://github.com/user-attachments/assets/f13120bd-0c54-4b80-8251-6d44511354b2

### Advanced - Specifying Reading List


## Features

- Automatically clicks "Save" buttons on Google Scholar search results
- Selects a specified reading list for saving articles
- Implements delays to avoid overwhelming the Google Scholar interface

## How to Use

1. Open your Google Scholar search results page in a web browser.
2. Open the browser's developer console:
   - Chrome/Edge: Press F12 or right-click and select "Inspect", then click on "Console"
   - Firefox: Press F12 or right-click and select "Inspect Element", then click on "Console"
   - Safari: Enable developer tools in preferences, then press Command+Option+C

3. Copy and paste the entire content of `google_scholar_auto_save.js` into the console.

4. By default, the script is set to save articles to the reading list with ID "6" which is usually the default reading list. Follow the advanced steps below to change this.

## Advanced Usage - Obtain the reading list ID:

1. Click the "Save" button for any article to open the save dialog
2. In the developer tools, switch to the "Elements" tab
3. Use the element selector tool (usually an icon that looks like a cursor over a square) to click on one of your reading list options
4. In the HTML, look for an `<a>` tag with attributes like `role="checkbox"` and `data-id="..."`
5. The value of the `data-id` attribute is your reading list ID


## Customization

- Adjust the delay times in the script if needed:
  - `setTimeout(() => { ... }, 1000);` controls the delay for the dialog to appear
  - `setTimeout(() => { ... }, index * 2000);` controls the delay between saving each article

## Important Notes

- Use this script responsibly and in accordance with Google Scholar's terms of service.
- Be aware that automated interactions may be detected and potentially blocked by Google.
- This script is for educational purposes and personal use. Use at your own risk.

## Contributing

Contributions to improve the script or expand its functionality are welcome. Please feel free to submit pull requests or open issues for any bugs or feature requests.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

This repository was created with the assistance of ChatGPT, an AI language model developed by OpenAI.
