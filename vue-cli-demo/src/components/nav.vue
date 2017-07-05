<style>
    .out{
        display: none;
    }
</style>

<template>

    <div>
        <router-link to="/home">Home</router-link>
        <router-link to="/list">List</router-link>
        <transition enter-active-class="animated fadeInUp" leave-active-class="out">
            <router-view></router-view>
        </transition>
    </div>

</template>

<script>

</script>

