
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 50.000, lng: -97.200 },
    mapTypeId: "roadmap",
    streetViewControl: false
  });
  // map.getProjection();

  const text = [
    'Picked up the truck! Thank you Jill!',
    'Packed and started driving from Cedar Island<br>Had to fit in a boat ride before we left.',
    'Got our vaccine at a hockey stadium. No pics :(',
    'First night, at a motel in the Sou. We climbed the roof of the truck!',
    'Incredible lake Superior! The Agawa pictographs were breathtaking.',
    'The famous Wawa goose!',
    'First pic of Bessie',
    'Sleeping giant in the sunniest city in Ontario!',
    'Got an awesome airbnb with private boat ride. Featuring a good boi.',
    'Drove straight through Manitoba (no stopping allowed) to Saskatchewan. <br> Stayed in a our second motel.',
    'Moose mountain provincial park. We didn\'t want to pay the fee, <br> so we went to a lake and had lunch.',
    'We loved the prairies!',
    'Our favourite town in Saskatchewan',
    'Saw the world\'s largest tipi! With lots of indigenous art.',
    'Writing on Stone provincial park - the mountains are in Montana!',
    'Head smashed in Buffalo jump was closed, but we still technically went there.',
    'Visited Craig\'s old apartment in downtown Calgary',
    'Canmore was one of our favourite towns!',
    'We went camping in Kanaskis valley for 1 night. The stars were incredible.',
    'Saw the famous Fairmont Banff Springs hotel',
    'The famous Lake Louise photo spot! It was quite rainy but still got some good views',
    'My favourite photo from the trip: seeing a massive waterfall <br> and the mountain illuminated by the sunset.',
    'Took lots of impromptu rest stops to see lookouts.',
    'Had a big drive from Jasper to Vancouver in 1 day. Filled up the gas tank at Kamloops.',
    'Here\'s Maddy inside a massive tree in Stanley Park.'
  ]

  // const path = "<center><img src='/Users/cameronmackay/dev/Road_Trip/Road_trip_final/camack98.github.io/images/"
  const path = "<center><img src='images/"

  const landscape = "'style='width:333px;height:250px;'></center>"
  const portrait = "'style='width:210px;height:280px;'</center>"

  const westCoordinates = [
    //ON
    [{ lat: 43.653, lng: -79.383 }, path + "toronto.jpeg" + portrait + "<p><center>" + text[0] + "</center></p>"],
    [{ lat: 44.611, lng: -79.415 }, path + "orillia.jpeg" + portrait + "<p><center>" + text[1] + "</center></p>"],
    [{ lat: 46.309, lng: -79.461 }, "<p><center>" + text[2] + "</center></p>"],
    [{ lat: 46.511, lng: -84.335 }, path + "st_marie.jpeg" + landscape + "<p><center>" + text[3] + "</center></p>"],
    [{ lat: 47.369, lng: -84.686 }, path + "agawa.jpeg" + portrait + "<p><center>" + text[4] + "</center></p>"],
    [{ lat: 47.992, lng: -84.770 }, path + "wawa.jpeg" + portrait + "<p><center>" + text[5] + "</center></p>"],
    [{ lat: 49.014, lng: -88.263 }, path + "nipigon.jpeg" + landscape + "<p><center>" + text[6] + "</center></p>"],
    [{ lat: 48.383, lng: -89.245 }, path + "thunder_bay.jpeg" + landscape + "<p><center>" + text[7] + "</center></p>"],
    [{ lat: 49.767, lng: -94.489 }, path + "kenora.jpeg" + portrait + "<p><center>" + text[8] + "</center></p>"],
    //SK
    [{ lat: 50.145, lng: -101.676 }, path + "moosomin.jpeg" + portrait + "<p><center>" + text[9] + "</center></p>"],
    [{ lat: 49.633, lng: -102.267 }, path + "carlyle.jpeg" + portrait + "<p><center>" + text[10] + "</center></p>"],
    [{ lat: 50.445, lng: -104.618 }, path + "regina.jpeg" + portrait + "<p><center>" + text[11] + "</center></p>"],
    [{ lat: 50.394, lng: -105.549 }, path + "moose_jaw.jpeg" + landscape + "<p><center>" + text[12] + "</center></p>"],
    //AB
    [{ lat: 50.041, lng: -110.677 }, path + "medicine_hat.jpeg" + portrait + "<p><center>" + text[13] + "</center></p>"],
    [{ lat: 49.083, lng: -111.627 }, path + "aden.jpeg" + landscape + "<p><center>" + text[14] + "</center></p>"],
    [{ lat: 49.701, lng: -113.656 }, path + "head_smashed.JPG" + landscape + "<p><center>" + text[15] + "</center></p>"],
    [{ lat: 51.048, lng: -114.071 }, path + "calgary.jpeg" + landscape + "<p><center>" + text[16] + "</center></p>"],
    [{ lat: 51.086, lng: -115.372 }, path + "canmore.jpeg" + portrait + "<p><center>" + text[17] + "</center></p>"],
    [{ lat: 50.638, lng: -115.103 }, path + "kananaskis.jpeg" + portrait + "<p><center>" + text[18] + "</center></p>"],
    [{ lat: 51.178, lng: -115.574 }, path + "banff_springs.jpeg" + portrait + "<p><center>" + text[19] + "</center></p>"],
    [{ lat: 51.415, lng: -116.215 }, path + "lake_louise.jpeg" + portrait + "<p><center>" + text[20] + "</center></p>"],
    [{ lat: 53.196, lng: -117.911 }, path + "jasper.jpeg" + portrait + "<p><center>" + text[21] + "</center></p>"],
    [{ lat: 52.875, lng: -118.086 },"jasper town"],
    //BC
    [{ lat: 52.831, lng: -119.264 }, path + "valemount.jpeg" + portrait + "<p><center>" + text[22] + "</center></p>"],
    [{ lat: 50.676, lng: -120.339 }, path + "kamloops.jpeg" + landscape + "<p><center>" + text[23] + "</center></p>"],
    [{ lat: 49.282, lng: -123.120 }, path + "vancouver.jpeg" + portrait + "<p><center>" + text[24] + "</center></p>"]
  ];

  const westModified = westCoordinates.map(function (x) {
    return x[0];
  });

  const westBound = new google.maps.Polyline({
    path: westModified,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  const text2 = [
    'Took the Sea to Sky highway up to Whistler and stayed in a capsule hotel in Whistler Village',
    'We loved Jasper so much we had to go back.',
    'Cool neon signs in downtown Edmonton!',
    'This town runs down the middle of the Alberta-Saskatchewan provincial border<br> Even the sidewalk on each side is different!',
    'Took a quick stop in Saskatoon for food.',
    'Found a great free campsite north of Regina. Lots of open space in the prairies!',
    'Met up with our friends Pat and August from Regina for Dinner.',
    'Wowota was our next campsite before we head back through Manitoba to Ontario.',
    'On the way to a farmer\'s market in Winnipeg.',
    'Neither Maddy or I knew that the time zone changed in Ontario!',
    'We climbed a lighthouse in Terrace Bay before the fog rolled in.',
    'Lots of fog on our way to the abandoned limestone quarry where we spent our final night. <br> Way too many mosquitos!'
  ]

  const eastCoordinates = [
    [{ lat: 49.282, lng: -123.120 }, "vancouver"],
    [{ lat: 50.120, lng: -122.960 }, path + "whistler.jpeg" + portrait + "<p><center>" + text2[0] + "</center></p>"],
    [{ lat: 52.875, lng: -118.086 }, path + "jasper_town_2.jpeg" + portrait + "<p><center>" + text2[1] + "</center></p>"],
    [{ lat: 53.544, lng: -113.490 }, path + "edmonton.jpeg" + portrait + "<p><center>" + text2[2] + "</center></p>"],
    [{ lat: 53.277, lng: -110.034 }, path + "lloydminster.jpeg" + portrait + "<p><center>" + text2[3] + "</center></p>"],
    [{ lat: 52.151, lng: -106.668 }, path + "saskatoon.jpeg" + portrait + "<p><center>" + text2[4] + "</center></p>"],
    [{ lat: 51.852, lng: -105.028 }, path + "lanigan.jpeg" + portrait + "<p><center>" + text2[5] + "</center></p>"],
    [{ lat: 50.451, lng: -104.500 }, path + "regina_2.jpg" + portrait + "<p><center>" + text2[6] + "</center></p>"],
    [{ lat: 49.904, lng: -102.023 }, path + "wawota.jpeg" + portrait + "<p><center>" + text2[7] + "</center></p>"],
    [{ lat: 49.900, lng: -97.139 }, path + "winnipeg.jpeg" + landscape + "<p><center>" + text2[8] + "</center></p>"],
    [{ lat: 48.823, lng: -89.923 }, path + "time_zone.jpeg" + "'style='width:210px;height:240px;'</center>" + "<p><center>" + text2[9] + "</center></p>"],
    [{ lat: 48.783, lng: -87.097 }, path + "terrace_bay.jpeg" + portrait + "<p><center>" + text2[10] + "</center></p>"],
    [{ lat: 46.061, lng: -80.681 }, path + "mosquito.jpeg" + landscape + "<p><center>" + text2[11] + "</center></p>"],
    [{ lat: 44.610, lng: -79.405 }, "orillia"],
    [{ lat: 44.231, lng: -76.486 }, "kingston"],
    [{ lat: 43.653, lng: -79.383 }, "toronto"]
  ];

  const eastModified = eastCoordinates.map(function (x) {
    return x[0];
  });

  const eastBound = new google.maps.Polyline({
    path: eastModified,
    geodesic: true,
    strokeColor: "#0000FF",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  const svgMarker1 = {
    path: "M12 0a8 8 0 0 0-8 8c0 1.421.382 2.75 1.031 3.906.108.192.221.381.344.563L12 24l6.625-11.531c.102-.151.19-.311.281-.469l.063-.094A7.954 7.954 0 0 0 20 8a8 8 0 0 0-8-8zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z",
    fillColor: "red",
    fillOpacity: 0.8,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(12, 25)
  };

  var i;

  for (i = 0; i < westCoordinates.length; i++) {
    var marker = new google.maps.Marker({
      position: westCoordinates[i][0],
      map,
      icon: svgMarker1,
      animation: google.maps.Animation.DROP,
      optimized: true,
      title: "marker" + i
    });

    var infowindow2 = new google.maps.InfoWindow({
      position: marker.position,
      content: westCoordinates[i][1]
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        map.setZoom(8);
        map.setCenter(marker.position);
        infowindow2.setContent(westCoordinates[i][1]);
        infowindow2.open(map, marker);
      }
    })(marker, i));
  };

  const svgMarker2 = {
    path: "M12 0a8 8 0 0 0-8 8c0 1.421.382 2.75 1.031 3.906.108.192.221.381.344.563L12 24l6.625-11.531c.102-.151.19-.311.281-.469l.063-.094A7.954 7.954 0 0 0 20 8a8 8 0 0 0-8-8zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z",
    fillColor: "blue",
    fillOpacity: 0.8,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(12, 25)
  };

  var j;

  for (j = 1; j < eastCoordinates.length - 3; j++) {
    var marker = new google.maps.Marker({
      position: eastCoordinates[j][0],
      map,
      icon: svgMarker2,
      animation: google.maps.Animation.DROP,
      optimized: true,
      title: "marker" + j
    });

    var infowindow = new google.maps.InfoWindow({
      position: marker.position,
      content: eastCoordinates[j][1]
    });

    google.maps.event.addListener(marker, 'click', (function (marker, j) {
      return function () {
        map.setZoom(8);
        map.setCenter(marker.position);
        infowindow.setContent(eastCoordinates[j][1]);
        infowindow.open(map, marker);
      }
    })(marker, j));
  };

  const text3 = [
    'Our new home city!',
    'Le Massif de Charlevoix! Amazing views of the St. Lawrence. <br>Got a snowstorm the second day but luckily some sun on this one. ',
    'Got some french viennoiseries in Quebec City on the drive back. <br> Did you know that in Quebec they call it Chocolatine instead of Pain au Chocolat?',
    'Stopped by in Montreal to see my singing teacher Ramneek perform in her concert!'
  ]
  const skiCoordinates = [
    [{ lat: 45.352, lng: -75.840 }, path + "ottawa.jpg" + landscape + "<p><center>" + text3[0] + "</center></p>"],
    [{ lat: 47.280, lng: -70.609 }, path + "le_masif.jpg" + portrait + "<p><center>" + text3[1] + "</center></p>"],
    [{ lat: 46.814, lng: -71.208 }, path + "quebec_city.jpg" + portrait + "<p><center>" + text3[2] + "</center></p>"],
    [{ lat: 45.503, lng: -73.570 }, path + "montreal.jpeg" + landscape + "<p><center>" + text3[3] + "</center></p>"],
    [{ lat: 45.352, lng: -75.840 },"home"]
  ];

  const skiModified = skiCoordinates.map(function (x) {
    return x[0];
  });

  const skiBound = new google.maps.Polyline({
    path: skiModified,
    geodesic: true,
    strokeColor: "#32CD30",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  const svgMarker3 = {
    path: "M12 0a8 8 0 0 0-8 8c0 1.421.382 2.75 1.031 3.906.108.192.221.381.344.563L12 24l6.625-11.531c.102-.151.19-.311.281-.469l.063-.094A7.954 7.954 0 0 0 20 8a8 8 0 0 0-8-8zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z",
    fillColor: "green",
    fillOpacity: 0.8,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(12, 25)
  };

  var k;

  for (k = 0; k < skiCoordinates.length-1; k++) {
    var marker = new google.maps.Marker({
      position: skiCoordinates[k][0],
      map,
      icon: svgMarker3,
      animation: google.maps.Animation.DROP,
      optimized: true,
      title: "marker" + k
    });

    var infowindow2 = new google.maps.InfoWindow({
      position: marker.position,
      content: skiCoordinates[k][1]
    });

    google.maps.event.addListener(marker, 'click', (function (marker, k) {
      return function () {
        map.setZoom(8);
        map.setCenter(marker.position);
        infowindow2.setContent(skiCoordinates[k][1]);
        infowindow2.open(map, marker);
      }
    })(marker, k));
  };

  const text4 = [
    'Kingston for a friend\'s birthday.',
    'Visited Perth, Ontario on a spontaneus adventure! <br> Camped in the Lexus! '
  ]

  const fallCoordinates = [
    [{ lat: 44.231, lng: -76.486 }, path + "kingston.jpeg" + portrait + "<p><center>" + text4[0] + "</center></p>"],
    [{ lat: 44.899, lng: -76.248 }, path + "perth.jpg" + portrait + "<p><center>" + text4[1] + "</center></p>"],
    [{ lat: 45.503, lng: -73.569 },"mtl"],
    [{ lat: 43.722, lng: -79.383 },"toronto"],
  ];

  const fallModified = fallCoordinates.map(function (x) {
    return x[0];
  });

  const fallBound = new google.maps.Polyline({
    path: fallModified,
    geodesic: true,
    strokeColor: "#FF9A00",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  const svgMarker4 = {
    path: "M12 0a8 8 0 0 0-8 8c0 1.421.382 2.75 1.031 3.906.108.192.221.381.344.563L12 24l6.625-11.531c.102-.151.19-.311.281-.469l.063-.094A7.954 7.954 0 0 0 20 8a8 8 0 0 0-8-8zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z",
    fillColor: "orange",
    fillOpacity: 0.8,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(12, 25)
  };

  var k;

  for (k = 0; k < fallCoordinates.length-2; k++) {
    var marker = new google.maps.Marker({
      position: fallCoordinates[k][0],
      map,
      icon: svgMarker4,
      animation: google.maps.Animation.DROP,
      optimized: true,
      title: "marker" + k
    });

    var infowindow2 = new google.maps.InfoWindow({
      position: marker.position,
      content: fallCoordinates[k][1]
    });

    google.maps.event.addListener(marker, 'click', (function (marker, k) {
      return function () {
        map.setZoom(8);
        map.setCenter(marker.position);
        infowindow2.setContent(fallCoordinates[k][1]);
        infowindow2.open(map, marker);
      }
    })(marker, k));
  };

  westBound.setMap(map);
  eastBound.setMap(map);
  skiBound.setMap(map);
  fallBound.setMap(map);

}