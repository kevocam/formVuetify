import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from 'firebase/app';
import "firebase/firestore"
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDdqw6OO85XQA0mzqsZCyWsCyp9-OnJqWk",
  authDomain: "form-vuejs.firebaseapp.com",
  projectId: "form-vuejs",
  storageBucket: "form-vuejs.appspot.com",
  messagingSenderId: "357904916829",
  appId: "1:357904916829:web:da78fb135756fded4d08b4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
