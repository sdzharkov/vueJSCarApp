<template>
  <div class='state1'>
    <input type='text' class='form-control' placeholder='Enter Year:' v-model='car_year'>
    <input type='text' class='form-control' placeholder='Enter Make:' v-model='car_make'>
    <input type='text' class='form-control' placeholder='Enter Model:' v-model='car_model'>
    <button> Next State </button>
    <ul>
      <li v-for="car in cars" v-bind="car">
        {{car.car_make}}
        {{car.car_model}}
        {{car.car_highway_mpg}}
        {{car.car_city_mpg}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import lodash from 'lodash'
var _ = lodash

export default {
  name: 'state1',
  data () {
    return {
      car_year: '',
      car_make: '',
      car_model: '',
      cars: []
    }
  },
  watch: {
    car_model: function () {
      if (this.car_model.length > 0) {
        this.lookupnewCar()
      } else {
        this.clearCar()
      }
    }
  },
  methods: {
    lookupnewCar: _.debounce(function () {
      var inst = this
      axios.get('http://localhost:8000/tripapp/carsApi/?car_make=Honda&car_year=2000')
        .then(function (response) {
          console.log(response.data)
          inst.$set(inst, 'cars', response.data)
        })
        .catch(function (error) {
          if (error) {
            console.log(error)
          }
        })
    }, 500),
    clearCar: function () {
      // inst.$set(inst, 'cars', [])
      this.$remove('cars')
    }
  }
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
