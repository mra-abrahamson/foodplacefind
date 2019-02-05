## About

**Places** is a web app for finding places around you, and saving the ones you
like as favorites. It uses the Google Maps Places API to answer queries like
"French restaurant" or "pub downtown". It is built with Redux and React 16.

## Features

* Search Google Maps Places
* Display results as a list and a map
* Tapping on an item in the list selects it on the map, and vice-versa
* Tap the heart icon to add a place to your Favorites. Your Favorites are
  preserved across different searches.
* Tap the heart count icon at the top to show only your Favorites, both on the
  list and on the map.

Known limitations:

* Users have to _Allow_ access to their browser's location to be able to use the
  app
* The handling of error messages could be more user-friendly, with more
  informative messages

## Running the app

### online demo

A demo is available at
[https://places-110b8.firebaseapp.com/](https://places-110b8.firebaseapp.com/)

### from the pre-built bundle

You can run the app easily with a local static server:

```
  npm install -g serve
  serve -s build
```

### from source

`npm install` To install all the required modules

`npm start` To run the app in development mode. Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run build` To build the app for production to the `build` folder. It
correctly bundles React in production mode and optimizes the build for the best
performance. The build is minified and the filenames include hashes.
