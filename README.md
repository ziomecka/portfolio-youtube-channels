# YouTube Channels

## Task
  + Selecting radio button should sort listed channels accordingly.
  + Filter channels by title based on an input text. Filtering should be case-insensitive.
  + Pressing `clear` button should reset both sorting options and text filter.
  + Clicking or tapping on a channel logo should open the link to the channel's youtube page in a new browser card.
  + Numbers represented in the US/British notation (each 10^3 group separated by a comma) e.g. one million = 1,000,000

## Assumptions
  + Plain JavaScript (ES6/ES2015+).
  + No CSS frameworks.

  ### Channels data
  + Data is received from server.
  + Channel's title is a unique identifier.
  + Data is localized on the server side on the basis of Accept-Language header, specific URL or preference stored in cookie.
    By 'localized' I mean translation. There is no need to deal with genders or plurals.
    Translations of descriptions like 'subscribers', 'videos', 'views' are received from server.
    The data has been added to channels.json.

  ### Server
  + Session middleware is simplified.
  + Session data is stored in object. It is definitely not for production. Data could be stored in MongoDB.

  ### Client
  + At present there is no need to remove single dom listeners.
    Therefore, I do not implement solution for removing a single / all listeners. But it should be remembered.

## Stack
+ Webpack:
  + removes console.warns in the production code,
  + can be used as preprocessor in karma,
  + bundles and optimizes the final code.
  + allows to use babel loader, postcss loader (autoprefixer)
+ Koa-router
+ Karma + jasmine

## Functionality and limitations
+ It may happen then data is not displayed to the client. Some 'error' component could be coded.
+ It may happen that it is takes time to load data. Some 'progress' component could be coded.

## Code - could be done
+ Bundled production files could have been gziped with compression-webpack-plugin.
+ The server code could be bundled: to make it smaller for production.

## Tests - could be done
+ I would add integration test: to check both filter and sorter in one test. Examples of scenarios:
  + when sort is clicked and filter filled in then the displayed channels should be...
  + when sort is clicked and filter filled in, and sort changed then the displayed channels should be...
  + when filter is filled in and sort clicked then the displayed channels should be...
  + ...

## Production
The website is available [online](https://frontend-js-channels.herokuapp.com/)
However, mongoDB is not implemented

## Browsers and Devices tested on
  ### Browsers
  + I have checked the website manually in the following browsers (via https://app.lambdatest.com/):
    + Chrome, versions: 70
    + Mozilla, versions: 60
    + Opera, version: 49
    + IE, version: 10 -- did not work
    + Safari 4.0 -- did not work

  + I used vendor-prefixes in css: [autoprefixer](https://autoprefixer.github.io/).

  + Moreover, I included babel and browserslistrc, that covers the following browsers (*npx browserslist*):
    + and_chr 71
    + and_uc 11.8
    + android 4.4.3-4.4.4
    + chrome 71
    + chrome 70
    + chrome 69
    + chrome 63
    + chrome 61
    + chrome 49
    + edge 18
    + edge 17
    + edge 16
    + edge 15
    + firefox 64
    + ie 11
    + ie 10
    + ios_saf 12.0-12.1
    + ios_saf 11.3-11.4
    + ios_saf 11.0-11.2
    + ios_saf 10.3
    + ios_saf 8
    + op_mini all
    + opera 57
    + safari 12
    + safari 11.1
    + samsung 4

  ### Devices
  + Acer swift 3
  + LG G6
  + HTC U11

---

[![coded with love](https://img.shields.io/static/v1?label=coded%20with&message=love&color=a53860)](https://img.shields.io/static/v1?label=coded%20with&message=love&color=a53860)
