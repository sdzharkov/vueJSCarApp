<template>
  <div class="state2">
    <input type='text' class='form-control' placeholder='Start Destination:' v-model='src'>
    <input type='text' class='form-control' placeholder='End Destination:' v-model='dest'>
    <maps
      :data1 = 'src'
      :data2 = 'dest'>
    </maps>
  </div>
</template>

<script>
import maps from './map'
// import axios from 'axios'
// import lodash from 'lodash'
// var _ = lodash

export default {
  components: {
    maps
  },
  data () {
    return {
      src: 'SF',
      dest: 'Davis'
    }
  },
  watch: {
    dest: function () {
      if (this.src.length > 0 && this.dest.length > 0) {
        console.log('working')
        // this.findDist()
      }
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
