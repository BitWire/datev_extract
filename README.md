# datev_extract
This npm package is a simple Extractor for Salary PDFs from the DateV platform arbeitnehmeronline.de

## Setup

1. Clone the Github Repo in a Directory of your choice via

> git clone https://github.com/ThomasSchmidtGF/datev_extract.git

2. Navigate in your chosen Directory, open a CLI and install the package via

> npm i

3. Put your Login Credentials into the cred.js file (no worries, nobody except for you, puppeteer and datev is going to see them)

## Usage

Just open a CLI and enter

> npm lohn.js

Done! Your PDF is in your Downloads folder.

If you want to see what the script is doing, open lohn.js with a editor and set the option "headless" to false.