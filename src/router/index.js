import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "products" */ "../views/Products.vue"),
      },

      {
        path: "/category/:id",
        name: "Category",
        props: true,
        component: () =>
          import(/* webpackChunkName: "category" */ "../views/Category.vue"),
      },
      {
        path: "product/:id",
        name: "Product",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "product" */ "../views/ProductDetails.vue"
          ),
      },
      {
        path: "cart",
        name: "Cart",
        component: () =>
          import(/* webpackChunkName: "cart" */ "../views/CartDetails.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      //const currentUser = localStorage.getItem("user");
      if (!store.state.user) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
    beforeEnter: (to, from, next) => {
      //const currentUser = localStorage.getItem("user");
      if (!store.state.user) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "account" */ "../views/Account.vue"),
    beforeEnter: (to, from, next) => {
      //const currentUser = localStorage.getItem("user");
      if (store.state.user) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
