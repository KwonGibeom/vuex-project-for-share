import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Home.vue")
    },
    {
      path: "/users",
      name: "users",
      component: () =>
        import(/* webpackChunkName: "users" */ "./views/Users.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "users" */ "./views/Login.vue")
    },
    {
      path: "/*",
      redirect: { name: "home" }
    }
  ]
});
