
<style scoped lang="stylus" rel="stylesheet/stylus">
    div{
        color: #1b6d85;
    }

    div
      h1
        color #761c19;


</style>


<template>
    <div>
        {{msg}}
        <h1>小时候贼叼...</h1>
        <!--<router-link to="/home">路由一</router-link>-->
        <!--<router-link to="/home1">路由二</router-link>-->
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import Nav from './nav.vue';

    export default {
        data (){
            return {
                msg: "首页"
            }
        },
        components:{
            Nav
        }
    }
</script>

