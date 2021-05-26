function initMap() {
    let wrapper = document.getElementById('map');
    var map = new google.maps.Map(wrapper, {
        center: {lat: +wrapper.dataset.lat, lng: +wrapper.dataset.lng},
        zoom: 16,
    })

    var marker = new google.maps.Marker({
        position: {lat: +wrapper.dataset.lat, lng: +wrapper.dataset.lng},
        map: map,
        icon: wrapper.dataset.iconSrc,
    });
}