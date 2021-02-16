import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import axios from "axios";
import "./Api/axios.js";

import feather from "vue-icon";
import store from "./store";
Vue.use(feather, "v-icon");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      this.$store.commit("SET_USER", user);
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch("logout");
        }
        return Promise.reject(error);
      }
    );
  },
  render: (h) => h(App),
}).$mount("#app");
