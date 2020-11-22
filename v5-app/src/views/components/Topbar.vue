<template>
    <div class="topbar">
      <div class="logo-box">
        <img class="logo" src="../../assets/img/logotyp.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'Topbar'
    
}
</script>

<style lang="scss">
  .topbar {
    display: flex;
    width: 100%;
    height: 55px;
    -webkit-box-shadow: 0px 2px 0px 0px rgba(32,32,32,1);
    -moz-box-shadow: 0px 2px 0px 0px rgba(32,32,32,1);
    box-shadow: 0px 2px 0px 0px rgba(32,32,32,1);
    .logo-box {
      .logo {
        height: 100%;
        width: auto;
      }
    }
  }
</style>