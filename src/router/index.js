import Vue from "vue";
import VueRouter from "vue-router";
import Integral from "../views/Integral.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: 'home',
    component: Integral
  }
  // {
  //   path: "/integral",
  //   name: "Integral",
  //   component: Integral
  // }
];

const router = new VueRouter({
  routes
});

export default router;