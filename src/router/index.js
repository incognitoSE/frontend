import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "loginPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/dashboard.vue")
  },
  {
    path: "/servicehouse",
    name: "servicehouse",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/servicehouse.vue")
  },
  {
    path: "/services",
    component: Home
  },
  {
    path: "/questions",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
