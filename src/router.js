import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      name: "home",
      component: Home
    },
    {
      path: "/child-drum",
      name: "child-drum",
      component:() => import("./views/child-drum.vue")
    },
    {
      path: "/child-piano",
      name: "child-piano",
      component:() => import("./views/child-piano.vue")
    },
    {
      path: "/child-guita",
      name: "child-guita",
      component:() => import("./views/child-guita.vue")
    },
    {
      path: "/school",
      name: "school",
      component:() => import("./views/school.vue")
    },
    {
      path: "/schoolPosition",
      name: "schoolPosition",
      component:() => import("./views/schoolPosition.vue")
    }
  ]
});
