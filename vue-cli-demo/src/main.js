/**
 * Created by samuelcheng on 2017/7/5.
 */
// import Vue from 'vue/dist/vue';
//引入vue的时候 默认是"main": "dist/vue.runtime.common.js",而不是vuejs
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './route.js';
// import 'animate.css';
import samuelButtom from './components/Button';
// import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(VueRouter);
Vue.use(samuelButtom);
// Vue.use(VueResource);

// Vue.use(axios);
Vue.prototype.$http =axios;

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

