import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FA from "../views/FA.vue"
import person from "../views/person.vue"
import login from "../views/login.vue"
import zhuce from "../views/zhuce.vue"
import mygoods from "../views/mygoods.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/FA",
    name: "FA",
    component: FA
  },
  {
    path: "/person",
    name: "person",
    component: person
  },
  {
    path: "/login",
    name: "login",
    component:login
    
  },
  {
    path: "/zhuce",
    name: "zhuce",
    component:zhuce
  },
  {
    path: "/mygoods",
    name: "mygoods",
    component:mygoods
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
