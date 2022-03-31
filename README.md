# Road Trips Website
## https://camack98.github.io 🗺️:car:🍁
### Outline
Created website leveraging Google Maps JavaScript API to show a map of where we have travelled to: including pictures and descriptions from our travels.
### Useful API classes
- google.maps.**Map()** - create new map object.
- google.maps.**Polyline()** - create 'flightpath' line connecting two points specified by { lat: 49.282, lng: -123.120 } object.
- google.maps.**Marker()** - create 'marker' (pin) on map at each coordinate specified.
- google.maps.**InfoWindow()** - creates boxes containing image and text associated with a marker on the map.
- google.maps.event.**addListener()** - takes marker as a parameter, listens for user event (in this case, clicking on the marker) pulls up associated infowindow.
