k# Najważniejsze zmiany
Pozwalam sobie na polski, bo szybciej:

+ Dane pochodzą z channels.data. Przechowuję:
    + ostatnie przefiltrowane dane,
    + pole i kierunek ostatniego sortowania,
    + ostatni filtr -> po to żeby sprawdzić, czy filtrować to co już jest przefiltrowane, czy filtorwąć wszystko od początku.

Zastanawiałam się czy przechowywać tylko id ostatnio wyfiltrowanych kanałów:
    + Za: zajmowałoby to mniej miejsca.
    + Przeciw: trzeba byłoby na podstawie id sklejać komplet danych. A to zajmowane miejsce to pewno pomijalne i tylko na określony czas ( ten czas to jest do zaimplementowania ).

+ Waliduję parametry tylko tam gdzie uznałam to za na prawdę potrzebne.
Kierowałam się tym, czy przeglądarka sama wyrzuci błąd, oraz wygodą programisty (żeby błąd nie przeszedł nie zauważony).
if (process.production.NODE_ENV === 'production') został tylko w jednym miejscu. Świadomie, webpack 4 wyrzuci.

+ Zrezygnowałam z przekazywania argumentów w obiektach, chociaż nadal uważam, że bywa to wygodne.

+ Spłaszczyłam foldery, żeby zredukować szum.
Ale np. nadal exportuję całe manageDomListeners. Dlatego, że ten export traktuję jak obiekt z metodami. Łatwiej się importuje, a przewiduję, że w manageDomListeners pojawią sie metody 'remove', 'removeAll'.

+ Ograniczyłam liczbę argumentów, zwłaszcza w funkcjach tworzących HTML.
Również w celu ograniczenia szumu.

+ Skorzystałam z srcSet, bo na szybko nie znalazłam przewagi window.matchMedia. Doczytam dokumentację :-)

+ We wcześniejszym rozwiązaniu w 'manageDom' przechowywałam wszystkiem operacje wykonywane na document.
Drażniło mnie to bo nie było wygodne. A takie rozwiazanie miałoby uzasadnienie w dwóch przypadkach:
    + ze względu na testowalność kodu,
    + ze względu na polifaje czy babla, które mogłyby zwiększyć objętość kodu, więc lepiej byłoby to wyrzucić w jedno miejsce.
Podsumowując: wyodrębniłam tylko createElement, w którym widzę jakąś wartość dodaną.

Wydaje mi się, że kod nadal jest testowalny. Zajrzałam do bundla, nie widzę polifajów. Przejrzałam browsers compatibility dla metod z których korzystam.

+ Zrezygnowałam z dynamicznie tworzonego HTMLa. Bo miało być prosto. A dynamicznie to mogę zrobić w react.

+ Przypisuję tylko jednego listenera do sortowania. Kosztem dodatkowego atrybutu w HTML.
Bo uznałam, że lepiej jak będzie jeden listener niż cztery. Podejrzewam, że liczba listenerów wpływa na działanie przeglądarki ( kiedyś się douczę ). Mogłam nie dodawać dodatkowego atrybutu do HTMLa, ale uznałam że nie chcę wykorzystywać id, bo jednak jego wykorzystanie / przeznaczenie jest trochę inne.

+ Starałm się nie zmieniać dotychczasowego css.
Traktuję to jako vendora i co najwyżej robię override'a. Dodałam swoją konwencję nazewnictwa. Być może należałoby ją uspójnić.

+ Zastanawiałam się nad koniecznością zrobienia reset w css. Instalowałam normalize.css. Sprawdzałam wpływ na chrome i firefox. Nie zauważyłam różnicy.

# Assumptions
## Channels data
+ Data is received from browser.
 created channels.data as it would be on server side

+ Channel's title is a unique identifier.

+ Translations of descriptions like 'subscribers', 'videos', 'views' is added to channels.json.
I call it general localized data.

+ Data received from server is always complete.
Also the general localized data is complete.
If some statistics were undefined the channels.json would contain '-';

+ Images have always three sizes: default, medium and high

+ Values: subscriberCount, videoCount, viewCount are always displayed.
If value is falsy then default value (received from server) is rendered.

+ Value: subscriberCount is hidden by default.

## Client
+ At present there is no need to channelsRemove single dom listeners.
Therefore, I do not implement solution for removing a single / all listeners. But it should be remembered.

# Stack
+ No typescript and jquery
I assume you want to see plain javascript. However, it would be much easier to use typescript ( e.g. all the validations of arguments would not be needed).
I think jQuery would not be needed anyway because I use babel and most of the dom methods have high browser compatibility.

+ Webpack
I use it because it:
- channelsRemoves console.warns in the production code,
- can be used as preprocessor in karma,
- bundles and optimizes the final code.
- allows to use babel loader, postcss loader (autoprefixer)

+ Karma + jasmine
Everybody uses Jest so I decided no to use it.

# Functionality and limitations
+ It may happen then data is not displayed to the client. Some 'error' component could be coded.
+ It may happen that it is takes time to load data. Some 'progress' component could be coded.

# Code - could be done
+ Bundled production files could have been gziped with compression-webpack-plugin.
+ I guess i could avoid coding manage.dom

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
