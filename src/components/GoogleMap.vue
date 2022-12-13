<template>
    <div class="container">
        <div ref="googleMap" class="google-map"></div>
    </div>
  
</template>

<script>
export default {
  name: "GoogleMap",
  props: {
    locations: {
      type: [Array, Object],
      required: true,
    },
  },
  data() {
    return {
      bounds: new google.maps.LatLngBounds(), // Авто масштабирование карты
      mapOptions: {
        center: { lat: 37.67, lng: 136.75 },
        zoomControl: true,
        zoom: 8,
        gestureHandling: "cooperative",styles: [
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b4d5e0'}],
          },
          {
            featureType: 'poi',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#c8eec9',
              },
            ],
          },
          {
            featureType: 'poi.attraction',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#f2f2f2',
              },
            ],
          },
          {
            featureType: 'poi.medical',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#f2f2f2',
              },
            ],
          },
          {
            featureType: 'poi.government',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#f2f2f2',
              },
            ],
          },
          {
            featureType: 'poi.place_of_worship',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#f2f2f2',
              },
            ],
          },
          {
            featureType: 'poi.school',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#f2f2f2',
              },
            ],
          },
          {
            featureType: 'poi.school',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'poi.sports_complex',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#b8d99f',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#999999',
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#dddddd',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#b0b0b0',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'labels.icon',
            stylers: [
              {
                lightness: 30,
              },
            ],
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#222222',
              },
            ],
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#717171',
              },
            ],
          },
          {
            featureType: 'administrative.neighborhood',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#999999',
              },
            ],
          },
          {
            featureType: 'administrative.province',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#717171',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.icon',
            stylers: [
              {
                saturation: -100,
              },
              {
                lightness: 30,
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#717171',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#669633',
              },
            ],
          },
          {
            featureType: 'transit.station.airport',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'transit.line',
            stylers: [
              {
                weight: 1,
              },
            ],
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#717171',
              },
            ],
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#717171',
              },
            ],
          },
        ],

      },
      
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
        // const  { imgClusterUrl, locations } = this.locations
      // create map
      const map = new google.maps.Map(this.$refs.googleMap, {
        ...this.mapOptions,
      });
      let markers = locations.map((location) => {
        // set locations for auto zoom map
        const setLocations = new google.maps.LatLng(location.lat, location.lng)
        this.bounds.extend(setLocations)

        // set Markers on Map
        return new google.maps.Marker({
          position: location,
          map: map,
          label: location.name_point,
          title: location.title  + ' ' + location.name_point,
        })
      })

      // create MarkerClusterer and add Image
      let markerCluster = new MarkerClusterer(map, markers,
        
        { imagePath: imgClusterUrl })

      // авто масштабирование
      map.fitBounds(this.bounds)
    },
    }
}
</script>


<style lang="scss">
.google-map {
  width: 605px;
  height: 945px;
}
</style>
