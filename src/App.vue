<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="Center-Container is-Inline">
    <div class="Center-Block">
        <state1></state1>
    </div>
  </div>
  </div>
</template>

<script>
import state1 from './components/state1'

export default {
  name: 'app',
  components: {
    state1
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .Center-Container.is-Flexbox {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
       -moz-box-align: center;
       -ms-flex-align: center;
    -webkit-align-items: center;
            align-items: center;
    -webkit-box-pack: center;
       -moz-box-pack: center;
       -ms-flex-pack: center;
    -webkit-justify-content: center;
            justify-content: center;
  }
}
</style>
