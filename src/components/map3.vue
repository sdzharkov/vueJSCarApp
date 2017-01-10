  <script>
  var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDWqkSWcyfLuSqhWaVGVexdWmIQvDCQQAs'
  })

  // googleMapsClient.geocode({
  //   address: '1600 Amphitheatre Parkway, Mountain View, CA'
  // }, function (err, response) {
  //   if (!err) {
  //     console.log(response.json.results)
  //   }
  // })

  googleMapsClient.distanceMatrix({
    origins: 'San Francisco',
    destinations: 'Sacramento'
  }, function (err, response) {
    if (!err) {
      console.log(response.jsonp.results)
    }
  })
  </script>