<template>
  <div id="app">
    <DefaultContainer v-if="logged"/>
    <h1 v-else> You must login to see content</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import DefaultContainer from './views/containers/DefaultContainer'
import VueSession from 'vue-session'
let options = {}
Vue.use(VueSession, options)

export default {
  name: 'V5-App',
  components: {
    DefaultContainer
  },
  data() {
    return {
      logged: true
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/style/style.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
