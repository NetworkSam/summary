/**
 * Created by samuelcheng on 2017/7/5.
 */
// import Vue from 'vue/dist/vue';
//引入vue的时候 默认是"main": "dist/vue.runtime.common.js",而不是vuejs
import Vue from 'vue';
import App from './App.vue';

const vm = new Vue({
    el: '#app',
    // components:{
    //     App
    // }
    ...App
    // render: (h)=>h(App)
});

