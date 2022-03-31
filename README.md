# Road Trips Website
## https://camack98.github.io 🗺️:car:🍁
### Outline
Created website leveraging [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview) to show a map of where I have travelled to in Canada, including pictures and descriptions from my travels.
### Useful API classes
- google.maps.**Map()** - create new map object.
- google.maps.**Polyline()** - create 'flightpath' line connecting two points specified by `{ lat: 49.282, lng: -123.120 }` object.
- google.maps.**Marker()** - create 'marker' (pin) on map at each coordinate specified.
- google.maps.**InfoWindow()** - creates boxes containing image and text associated with a marker on the map. 
- google.maps.event.**addListener()** - takes marker as a parameter, listens for user event (in this case, clicking on the marker) pulls up associated infowindow.
### Key learnings
- Restrict API keys in Google Cloud Platform.
- [GitHub Pages](https://pages.github.com/) automatically hosts websites from public or private Github repo (this one!).
- JS Object data type is useful (similar to Python dictionary).
