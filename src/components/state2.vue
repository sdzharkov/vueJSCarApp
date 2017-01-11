<template>
  <div class="state2">
    <input type='text' class='form-control' placeholder='Start Destination:' v-model='src'>
    <input type='text' class='form-control' placeholder='End Destination:' v-model='dest'>
    <input type="text" placeholder="Enter destinations in between:" v-model='mid' v-on:keyup.enter='submit_mid'>
    <maps
      :data1 = 'src'
      :data2 = 'dest'
      :data3 = 'locations'>
    </maps>
  </div>
</template>

<script>
import maps from './map2'
// import axios from 'axios'
// import lodash from 'lodash'
// var _ = lodash

export default {
  components: {
    maps
  },
  data () {
    return {
      src: '',
      dest: '',
      mid: '',
      locations: []
    }
  },
  watch: {
    dest: function () {
      if (this.src.length > 0 && this.dest.length > 0) {
        console.log('working')
        // this.findDist()
      }
    }
  },
  methods: {
    submit_mid: function () {
      this.locations.push(this.mid)
      this.$set(this, 'mid', '')
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
