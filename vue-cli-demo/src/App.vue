<style>

</style>

<template>
    <div>
        <div>hello world</div>
        <Home></Home>
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        components:{
            Home
        },
        mounted(){
//            this.$http.get('/hello');
        }
    }
</script>

