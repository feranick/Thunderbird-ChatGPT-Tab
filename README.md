# ChatGPT Tab
Unofficial ChatGPT add-on for Thunderbird, it adds a button in Spaces that opens a ChatGPT tab in Thunderbird. The [home page](https://addons.thunderbird.net/en-US/thunderbird/addon/chatgpt-tab/) of the extension contains the latest code.

#### Installing 
A new ChatGPT icon should appear in the Spaces Toolbar of Thunderbird. Click to open.

#### Installing from sources
Download the repository, zip it, rename it to ChatGPT-Tab.xpi and choose install addon from file in Thunderbird.

In linux the xpi file can be created with the following commands
* `git clone https://github.com/feranick/Thunderbird-ChatGPT-Tab`
* `cd ./Thunderbird-ChatGPT-Tab`
* `VERSION=$(cat ./manifest.json | jq --raw-output '.version')`
* `zip -r "../ChatGPT-Tab-${VERSION}-tb.xpi" *`
