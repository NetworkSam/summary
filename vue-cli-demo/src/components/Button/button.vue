<style>
    button{
        background: blue;
        color: #fff;
        border: 0;
        width: 100px;
        height: 30px;
        border-radius: 10px;
    }
</style>

<template>
    <button @click="fn"><slot></slot></button>
</template>

<script>
    export default {
        methods:{
            fn(){
                alert("click me!");
            }
        }
    }
</script>

