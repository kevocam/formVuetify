import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Data from "../views/Data.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/data",
    name: "Data",   
    component: Data
      
  },
  {
    path: "/",
    name: "Formulario",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
