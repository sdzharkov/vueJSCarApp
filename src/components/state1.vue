<template>
  <div class='state1'>
    <input type='text' class='form-control' placeholder='Enter Year:' v-model='car_year'>
    <input type='text' class='form-control' placeholder='Enter Make:' v-model='car_make'>
    <input type='text' class='form-control' placeholder='Enter Model:' v-model='car_model'>
    <button> Next State </button>
    <demo-grid
      :data="cars"
      :columns="gridColumns"
      :filter-key="searchQuery">
    </demo-grid>
  </div>
</template>

<script>
import axios from 'axios'
import lodash from 'lodash'
import demoGrid from './demo-grid'
var _ = lodash

export default {
  name: 'state1',
  components: {
    demoGrid
  },
  data () {
    return {
      car_year: '',
      car_make: '',
      car_model: '',
      cars: [],
      gridColumns: ['car_year', 'car_make', 'car_model', 'car_cylinder', 'car_drive', 'fuel']
      // searchQuery: ''
    }
  },
  watch: {
    car_model: function () {
      if ((this.car_year.length > 3 && this.car_make.length) || this.car_make.length || this.car_model.length) {
        this.lookupnewCar()
      } else {
        this.clearCar()
      }
    }
  },
  methods: {
    lookupnewCar: _.debounce(function () {
      var inst = this
      axios.get('http://localhost:8000/carAPI/cars/?car_make=' + this.car_make + '&car_year=' + this.car_year + '&car_model=' + this.car_model)
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
      this.$set(this, 'cars', [])
      // for (var i = 0; i < this.cars.length * 2; i++) {
      //   this.cars.splice(this.cars[i], 1)
      // }
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
