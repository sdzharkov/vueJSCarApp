<template>
  <iframe
    width="450"
    height="250"
    frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBMSi1KFmkp-dto-D_21QPPkDvfaeE7l0w&origin=" + this.data1 + "&destination=" + this.data2 + "" allowfullscreen>
  </iframe>
</template>

<script>
// var googleMapsClient = require('@google/maps').createClient({
//   key: 'AIzaSyBMSi1KFmkp-dto-D_21QPPkDvfaeE7l0w'
// });

export default {
  props: {
    data1: String,
    data2: String
  }
  // data () {
  // },
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
