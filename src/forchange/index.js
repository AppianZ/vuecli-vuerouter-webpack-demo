import "./assets/scss/reset.scss"

import Vue from 'vue'
import appp from './index.vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
    '*' : {
        component : require('./views/404.vue')
    },
    '/about' : {
        component : require('./views/about.vue')
    },
    '/test' : {
        component : require('./views/test.vue')
    }
});

const app = Vue.extend({});

router.start(app, "#app");

window.router = router;
