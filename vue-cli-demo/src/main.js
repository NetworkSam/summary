/**
 * Created by samuelcheng on 2017/7/5.
 */
// import Vue from 'vue/dist/vue';
//引入vue的时候 默认是"main": "dist/vue.runtime.common.js",而不是vuejs
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import  routes from './route.js';

Vue.use(VueRouter);

const router = new VueRouter(routes);

const vm = new Vue({
    el: '#app',
    router,
    // components:{
    //     App
    // }
    ...App
    // render: (h)=>h(App)
});

