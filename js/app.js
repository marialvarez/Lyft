function init(){
    
}

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.457368, lng: -71.531508},
    zoom: 12
});
    
    
    map.setCenter({lat: -16.457368, lng: -71.531508});
    var marker = new google.maps.Marker({
        map: map,
        position: {lat: -16.457368, lng: -71.531508},
        title: 'Hello World!',
        //label:'X',
        icon: 'image/carriño.png'
    });
}
