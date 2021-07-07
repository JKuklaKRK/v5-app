<template>
    <div class="clans-intro">
        <div v-if="accessGained == false" class="access-gained">
            <h1>I czego się tu spodziewałeś...?</h1>
            <iframe id="spanishInquistion" width="560" height="315" src="https://www.youtube.com/embed/yKQ_sQKBASM?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            accessGained: false
        }
    },
    methods: {
        unmute() {
            document.getElementById('spanishInquistion').unmute()
        }
    },
    mounted() {
        let access = this.$session.get('clanAccess')
        console.log(access)
        if (access == undefined) {
            this.accessGained = false
        } else if (this.$route.params.clan == access.clanId && access.pswd) {
            this.accessGained = true
        } else {
            alert('o ty chuju bobrze')
        }
    },
    beforeDestroy() {
        this.$session.remove('clanAccess')
    }
    
}
</script>
<style lang="scss">
    .access-gained {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        background-image: url('../../assets/img/flame.png');
        background-size: cover;
        background-repeat: no-repeat;
        h1 {
            margin:0 0 40px;
            font-size: 60px;
            color: #fff;
        }
    }
</style>