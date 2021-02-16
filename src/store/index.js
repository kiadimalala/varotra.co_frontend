import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    products: [],
    categories: [],
    product: null,
    cart: [],
    orders: [],
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    CLEAR_USER_DATA: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      location.reload();
    },
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    SET_PRODUCT: (state, product) => {
      state.product = product;
    },
    SET_BY_CATEGORY: (state, category) => {
      state.products = category.products;
    },
    ADD_TO_CART: (state, { product, quantity }) => {
      let productInCart = state.cart.find(
        (item) => item.product.id === product.id
      );
      if (!productInCart) {
        state.cart.push({ product, quantity });
      } else {
        productInCart.quantity += quantity;
      }
    },

    SET_ORDER: (state, orders) => {
      state.orders = orders;
    },
  },
  actions: {
    getProducts: ({ commit }) => {
      axios
        .get("https://mysterious-everglades-58663.herokuapp.com/products")
        .then((response) => {
          const products = response.data;
          commit("SET_PRODUCTS", products);
        });
    },
    getCategories: ({ commit }) => {
      axios
        .get("https://mysterious-everglades-58663.herokuapp.com/categories")
        .then((response) => {
          const categories = response.data;
          commit("SET_CATEGORIES", categories);
        });
    },
    getProduct: ({ commit }, productId) => {
      axios
        .get(`https://mysterious-everglades-58663.herokuapp.com/${productId}`)
        .then((response) => {
          commit("SET_PRODUCT", response.data);
        });
    },
    productByCategory: ({ commit }, categoryId) => {
      axios
        .get(
          `https://mysterious-everglades-58663.herokuapp.com/categories/${categoryId}`
        )
        .then((response) => {
          commit("SET_BY_CATEGORY", response.data);
        });
    },
    addProductToCart: ({ commit }, { product, quantity }) => {
      commit("ADD_TO_CART", { product, quantity });
    },

    logIn: ({ commit }, { identifier, password }) => {
      axios
        .post("https://mysterious-everglades-58663.herokuapp.com/auth/local", {
          identifier: identifier,
          password: password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.jwt);
          commit("SET_USER", response.data.user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    register: ({ commit }, { username, email, password }) => {
      axios
        .post(
          "https://mysterious-everglades-58663.herokuapp.com/auth/local/register",
          {
            username: username,
            email: email,
            password: password,
          }
        )
        .then((response) => {
          localStorage.setItem("token", response.data.jwt);
          commit("SET_USER", response.data.user);
        });
    },
    logout: ({ commit }) => {
      commit("CLEAR_USER_DATA");
    },
    getOrder: ({ commit }) => {
      axios
        .get("https://mysterious-everglades-58663.herokuapp.com/orders", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          commit("SET_ORDER", response.data);
        });
    },
  },
  getters: {
    loggedIn: (state) => {
      return !!state.user;
    },
    cart: (state) => {
      return state.cart;
    },
    cartLength: (state) => {
      return state.cart.length;
    },
    totalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.product.price * item.quantity;
      });

      return total;
    },
  },
  modules: {},
});
