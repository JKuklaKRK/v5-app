<template>
  <div id="app">
    <DefaultContainer/>
  </div>
</template>

<script>
import DefaultContainer from './views/containers/DefaultContainer'
export default {
  name: 'V5-App',
  components: {
    DefaultContainer
  }
}
</script>

<style lang="scss">
@import url('./assets/style/style.css');
</style>
