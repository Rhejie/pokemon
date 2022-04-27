/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';

require('./bootstrap');

axios.defaults.headers.common["X-CSRF-TOKEN"] = window.Laravel.csrfToken;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const files = require.context("./", true, /\.vue$/i);
files.keys().map(key =>
    Vue.component(
        key
            .split("/")
            .pop()
            .split(".")[0],
        files(key).default
    )
);

import API from "./api/index.js";


Vue.prototype.$API = API;


const app = new Vue({
    el: '#app',
});
