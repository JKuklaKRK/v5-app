<template>
    <div class="menu">
        <div v-for="(item, i) of menuItems" v-bind:key="'menu-item-' + i" class="menu-item">
            <router-link :to="item.link">{{item.label}}</router-link>
        </div>
    </div>
</template>

<script>
import menu from '../../nav_content'
export default {
  name: 'Menu',
  data() {
      return {
          menuItems: []
      }
  },
  mounted() {
      console.log(menu)
      this.menuItems = menu.menu
  }
    
}
</script>

<style lang="scss">
    .menu {
        width: 200px;
        height: calc(100vh - 55px);
        -webkit-box-shadow: 2px 0px 0px 0px rgba(32,32,32,1);
        -moz-box-shadow: 2px 0px 0px 0px rgba(32,32,32,1);
        box-shadow: 2px 0px 0px 0px rgba(32,32,32,1);
        .menu-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            a {
                color: #8d8d8d;
            }
        }
    }

</style>