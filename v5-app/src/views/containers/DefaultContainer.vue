<template>
    <div class="main-container">
        <Topbar></Topbar>
        <div class="content">
            <Menu></Menu>
            <div class="content-box">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import Topbar from '../components/Topbar'
import Menu from '../components/Menu'
export default {
  name: 'DefaultContainer',
  components: {
    Topbar,
    Menu
  }
    
}
</script>

<style lang="scss">
    .main-container {
        display: flex;
        flex-direction: column;

        .content {
            display: flex;
            flex-direction: row;
            .content-box {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                background-color: #35363a;
                &>div:first-child {
                    flex-grow: 1;
                }
            }
        }
    }
</style>