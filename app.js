var mymap = L.map('map', {}).setView([51.505, -0.09], 12);

const options = {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/satellite-v9',
  tileSize: 512,
  zoomOffset: -1
}

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', options).addTo(mymap);


var popup = L.popup();

function onMapClick(e) {
  // popup
  //   .setLatLng(e.latlng)
  //   .setContent("You clicked the map at " + e.latlng.toString())
  //   .openOn(mymap);
    var zoom = mymap.getZoom()
    var center = mymap.getCenter()
    coord(zoom, center.lat, center.lng)

}

mymap.on('click', onMapClick);

function coord(zoom, lat, lgn){
  //console.log('zoom= '+zoom.toString()+' lat= '+lat.toString()+' log= '+lgn.toString())
  // var bounds = [[lat+0.01, lgn-0.0016], [lat-0.00168, lgn+0.00277]];
  // var rect = L.rectangle(bounds, {color: "#ff7800", weight: 1});
  // rect.addTo(mymap);
  // // mymap.fitBounds(bounds);
}

    // FeatureGroup is to store editable layers
        var drawnItems = new L.FeatureGroup();
        mymap.addLayer(drawnItems);
        var drawControl = new L.Control.Draw({
          draw: {
             polygon: false,
             marker: false,
             circle: false,
             polyline: false,
             circlemarker: false
         },
            edit: {
                featureGroup: drawnItems,

            }
        });
        mymap.addControl(drawControl);

        drawControl.setDrawingOptions({
    rectangle: {
    	shapeOptions: {
        	color: '#0000FF'
        }
    }
});



mymap.on(L.Draw.Event.CREATED, function (e) {
     var type = e.layerType,
         layer = e.layer;

         if (type === 'rectangle') {
        layer.on('click', function() {
          var coor = layer.getLatLngs()
            console.log(coor);
            //[-77.043686,38.892035,-77.028923,38.904192]
            var corrd = "["+coor[0][0].lng.toString()+','+coor[0][0].lat.toString()+','+coor[0][2].lng.toString()+','+coor[0][2].lat.toString()+']';
            var url = "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/"+corrd+"/400x400?access_token=pk.eyJ1IjoiZGhydXY0NyIsImEiOiJja242ZDFteGUwY3k0MnFwNDNjbmt6NG5oIn0.FA5NQqZam_Z2gENBpdsr5Q"
            console.log(url);

        });
    }

    drawnItems.addLayer(layer);
    // console.log(layer.getLatLngs())


 });
