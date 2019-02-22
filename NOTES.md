# Assumptions
## Channels data
+ Data is received from server.

+ Channel's title is a unique identifier.

+ Data received from server may be incomplete e.g. 'url' may be empty.
I assume that the channel should be displayed anyway - some default values are displayed.

+ Data is localized on the server side on the basis of Accept-Language header, specific URL or preference stored in cookie.
By 'localized' I mean translation. There is no need to deal with genders or plurals.
Translations of descriptions like 'subscribers', 'videos', 'views' are received from server.
The data has been added to channels.json.

+ Values: subscriberCount, videoCount, viewCount are always displayed.
If value is falsy then default value (received from server) is rendered.

+ Value: subscriberCount is hidden by default.

## Server
+ Session middleware is simplified.
+ Session data is stored in object. It is definitely not for production. Data could be stored in MongoDb.

## Client
+ At present there is no need to remove single dom listeners.
Therefore, I do not implement solution for removing a single / all listeners. But it should be remembered.

# Stack
+ No typescript and jquery
I assume you want to see plain javascript. However, it would be much easier to use typescript ( e.g. all the validations of arguments would not be needed).
I think jQuery would not be needed anyway because I use babel and most of the dom methods have high browser compatibility.

+ Webpack
I use it because it:
- removes console.warns in the production code,
- can be used as preprocessor in karma,
- bundles and optimizes the final code.
- allows to use babel loader, postcss loader (autoprefixer)

+ I use koa-router
I assume that when user requests channels.json server makes some database query and then sends back the data. So sending channels is not just sending a static file.

+ I removed getPort
It didn't work with heroku

+ Karma + jasmine
Everybody uses Jest so I decided no to use it.

# Functionality and limitations
+ More than one filter or additional sorters can be easily added.
+ It may happen then data is not displayed to the client. Some 'error' component could be coded.
+ It may happen that it is takes time to load data. Some 'progress' component could be coded.

# Code - could be done
+ Bundled production files could have been gziped with compression-webpack-plugin.
+ At present parts of html are generated in the browser. It can affect negatively the performance and positioning. Therefore, they could be generated on the server side (like in React server-side-rendering).
+ I almost do not throw Errors, just print console.warns. It has occured to be very inconvenient. Therefore, I would change console.warns to Errors.
+ Also errors' maps are inconvenient -> could be changed to object and reduced to some general errors, or removed.
+ The server code could be bundled: to make it smaller for production.
+ The code in the static/js/common directory could be reorganized, for example separate dir for manage.dom and separate files for functions (like it is done for media).

# Tests
+ I would add integration test: to check both filter and sorter in one test. Examples of scenarios:
    + when sort is clicked and filter filled in then the displayed channels should be...
    + when sort is clicked and filter filled in, and sort changed then the displayed channels should be...
    + when filter is filled in and sort clicked then the displayed channels should be...
    + ...

# Production
The website is available [online](https://frontend-js-channels.herokuapp.com/)
However, mongoDB is not implemented (yet)

# Browsers and Devices tested on

## Browsers I tested on
+ I have checked the website manually in the following browsers (via https://app.lambdatest.com/):
    + Chrome, versions: 70
    + Mozilla, versions: 60
    + Opera, version: 49
    + IE, version: 10 -- did not work
    + Safari 4.0 -- did not work

## Browsers compatibility
To ensure browsers coverage:

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

## Devices I tested on
+ Acer swift 3
+ LG G6
+ HTC U11

# Other
+ When I code for myself I'm used to store ideas in todo file. Therefore you can see 'todo' in .gitignore.
