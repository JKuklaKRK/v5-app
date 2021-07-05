<template>
    <div class="menu">
        <router-link v-for="(item, i) of menuItems" :key="'menu-item' + i" :to="item.link">{{item.label}}</router-link>
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
        min-width: 200px;
        width: 200px;
        height: calc(100vh - 55px);
        -webkit-box-shadow: 2px 0px 0px 0px rgba(32,32,32,1);
        -moz-box-shadow: 2px 0px 0px 0px rgba(32,32,32,1);
        box-shadow: 2px 0px 0px 0px rgba(32,32,32,1);
        a {
            display: block;
            padding: 20px 0;
            border-radius: 3px;
            color: #8d8d8d;
            text-align: center;
            cursor: pointer;
            text-decoration: none;
        
            &:hover {
                animation-name: link-hover;
                animation-duration: 8s;
                animation-iteration-count: infinite;
                -o-animation-timing-function: ease-in-out;
            }
        }
    }

</style>