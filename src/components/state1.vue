<template>
  <div class="state1">
    <input type="text" class="form-control" placeholder="Enter Year:" v-model="car_year">
    <input type="text" class="form-control" placeholder="Enter Make:" v-model="car_make">
    <input type="text" class="form-control" placeholder="Enter Model:" v-model="car_model">
    <button> Next State </button>
  </div>
</template>

<script>
export default {
  name: 'state1',
  data () {
    return {
      msg: 'Welcome to Your Vue App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
