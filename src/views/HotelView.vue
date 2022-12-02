<template>
  <div class="home">
    <Header></Header>
    <div style="display: flex">
      <Hotel></Hotel>
      <GoogleMap></GoogleMap>
    </div>
  </div>
</template>

<script>
import Hotel from "@/components/Hotel.vue";
import Header from "@/components/Header.vue";
import GoogleMap from "@/components/GoogleMap.vue";

export default {
  components: {
    Hotel,
    Header,
    GoogleMap,
  },
  // props: {
  //   locations: {
  //     imgClusterUrl:
  //       "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  //     locations: [
  //       {
  //         id: 1,
  //         lat: -31.563944,
  //         lng: 147.154355,
  //         name_point: "A",
  //         title: "text on hover",
  //       },
  //       {
  //         id: 2,
  //         lat: -33.718234,
  //         lng: 150.363181,
  //         name_point: "B",
  //         title: "text on hover",
  //       },
  //       {
  //         id: 3,
  //         lat: -33.727111,
  //         lng: 150.371124,
  //         name_point: "C",
  //         title: "text on hover",
  //       },
  //       {
  //         id: 4,
  //         lat: -33.848588,
  //         lng: 151.209834,
  //         name_point: "D",
  //         title: "text on hover",
  //       },
  //       {
  //         id: 5,
  //         lat: -34.853202,
  //         lng: 150.55,
  //         name_point: "E",
  //         title: "text on hover",
  //       },
  //       {
  //         id: 6,
  //         lat: -34.851702,
  //         lng: 150.216968,
  //         name_point: "F",
  //         title: "text on hover",
  //       },
  //     ],
  //   },

  }
</script>
