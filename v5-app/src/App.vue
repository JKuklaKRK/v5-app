<template>
  <div id="app">
    <DefaultContainer v-if="logged"/>
    <h1 v-else> You must login to see content</h1>
  </div>
</template>

<script>
import DefaultContainer from './views/containers/DefaultContainer'
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
</style>
