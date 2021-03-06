/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
//vue js vuetify
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 

Vue.use(Vuetify)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('Chat', require('./components/Chat.vue').default);
Vue.component('private-chat', require('./components/private-chat.vue').default);
//FOR USING file-upload COMPONENT GLOBALLY
const VueUploadComponent = require('vue-upload-component');
Vue.component('file-upload',VueUploadComponent);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// const VueUploadComponent = require('vue-upload-component')
// Vue.component('file-upload', VueUploadComponent)

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// Vue.component('Chat', require('./components/Chat.vue'));
// Vue.component('PrivateChat', require('./components/PrivateChat.vue'));


const app = new Vue({ 
    el: '#app',
});
