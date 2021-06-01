import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import dashboard from "../views/dashboard.vue";

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
    path: "/dashboard/HistoryOfServices",
    component: dashboard,
    children: [
      {
        path: "/IncreaseCredit",
        name: "IncreaseCredit",
        component: () =>
          import(
            /* webpackChunkName: "IncreaseCredit" */ "../views/IncreaseCredit.vue"
          )
      },
      {
        path: "",
        name: "HistoryOfServices",
        component: () =>
          import(
            /* webpackChunkName: "HistoryOfServices" */ "../views/HistoryOfServices.vue"
          )
      },
      {
        path: "/HistoryOfPayment",
        name: "HistoryOfPayment",
        component: () =>
          import(
            /* webpackChunkName: "HistoryOfPayment" */ "../views/HistoryOfPayment.vue"
          )
      }
    ]
    // meta: { requiresAuth: true }
  },
  {
    path: "/servicehouse",
    name: "servicehouse",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/servicehouse.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/ServiceSim",
    name: "ServiceSim",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServiceSim.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/ServiceCar",
    name: "ServiceCar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ServiceCar.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/OurTeam",
    name: "OurTeam",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OurTeam.vue")
  },

  {
    path: "/dashboradTable",
    name: "dashboradTable",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/dashboard_table.vue")
  },
  {
    path: "/dashboradTable2",
    name: "dashboradTable2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/dashboard_table2.vue")
  },
  {
    path: "/dashboradPay",
    name: "dashboradPay",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/dashboard.vue"),
    meta: { requiresAuth: true }
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
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (!loggedIn && to.matched.some(record => record.meta.requiresAuth)) {
    next("/");
  }
  next();
});
export default router;
