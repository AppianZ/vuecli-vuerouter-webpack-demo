/**
 * Created by JW on 2016/2/29.
 */
import './assets/scss/reset.scss';
import './index.scss';

import Vue from 'vue';
import VueRouter from "vue-router";
import $ from "jquery";

new Vue({
    el : "body",
    methods : {
        hide(){
            $("#nav").toggleClass('hidenav');
            $("#seaInput").toggleClass('hideinput');
        },
        click (){
            $(event.target).find('.left').toggleClass('down');
            $(event.target).toggleClass('pselect');
            $(event.target).siblings().toggleClass('limitHeight');
        }
    }
})


