<template>
  <div id="map_section">
    <div id="map"></div>
    <div id="right-panel">
      <input type="text" placeholder="Enter destinations in between:" v-model='mid' v-on:keyup.enter='submit_mid'>
      <div id="mid-list" v-for="(city,index) in locations">
        <li>{{ city }}</li>
        <button class="destroy" @click="remove_mid(index)"></button>
      </div>
      <input type="submit" v-on:click='loadDirections' id="submit">
      <div id="directions-panel"></div>
    </div>
  </div>
</template>

<script>
  import loadGoogleMapsAPI from 'load-google-maps-api'
  export default {
    props: {
      data1: String,
      data2: String
    },
    data () {
      return {
        mid: null,
        locations: [],
        route: null,
        directionsS: null,
        directionsD: null
      }
    },
    mounted: function () {
      // initMap()
      loadGoogleMapsAPI({key: 'AIzaSyDWqkSWcyfLuSqhWaVGVexdWmIQvDCQQAs'}).then((googleMaps) => {
        var directionsService = new googleMaps.DirectionsService()
        var directionsDisplay = new googleMaps.DirectionsRenderer()
        this.$set(this, 'directionsS', directionsService)
        this.$set(this, 'directionsD', directionsDisplay)

        var map = new googleMaps.Map(document.getElementById('map'), {
          zoom: 6,
          center: {lat: 37.7749, lng: -122.4194}
        })
        this.directionsD.setMap(map)

        // console.log(googleMaps) // => Object { Animation: Object}
      }).catch((err) => {
        console.error(err)
      })
    },
    methods: {
      setRoute: function (ITEM) {
        console.log('here')
        this.$store.commit('SET_ROUTE', ITEM)
      },
      submit_mid: function () {
        this.locations.push(this.mid)
        this.$set(this, 'mid', '')
      },
      remove_mid: function (index) {
        this.locations.splice(index, 1)
      },
      loadDirections: function () {
        this.calculateAndDisplayRoute(this.directionsS, this.directionsD)
      },
      calculateAndDisplayRoute: async function (directionsService, directionsDisplay) {
        var waypts = []

        for (var i = 0; i < this.locations.length; i++) {
          waypts.push({
            location: this.locations[i],
            stopover: true
          })
        }
        var origin1 = this.data1
        var destination1 = this.data2

        var input = {
          origin: origin1,
          destination: destination1,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }

        this.directionsS.route(input, function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response)
            var route = response.routes[0]
            var summaryPanel = document.getElementById('directions-panel')
            summaryPanel.innerHTML = ''
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
              var routeSegment = i + 1
              summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>'
              summaryPanel.innerHTML += route.legs[i].start_address + ' to '
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>'
              summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>'
            }
            return route
          } else {
            window.alert('Directions request failed due to ' + status)
            return -1
          }
        }).then((route) => { console.log(route) })
      }
    }
  }
</script>

<style>
  #right-panel {
    font-family: 'Roboto','sans-serif';
    line-height: 30px;
    padding-left: 10px;
  }

  #right-panel select, #right-panel input {
    font-size: 15px;
  }

  #right-panel select {
    width: 100%;
  }

  #right-panel i {
    font-size: 12px;
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #map {
    height: 400px;
    float: left;
    width: 400px;
  }
  #right-panel {
    margin: 20px;
    border-width: 2px;
    width: 25%;
    height: 400px;
    float: left;
    text-align: left;
    padding-top: 0;
  }
  #directions-panel {
    margin-top: 10px;
    background-color: #FFEE77;
    padding: 10px;
  }
  #map_section {
    display: inline-block;
    width: 80%;
  }
</style>

