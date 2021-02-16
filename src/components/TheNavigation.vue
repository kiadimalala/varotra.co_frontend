<template>
  <div id="nav" class="flex px-24 h-20">
    <div class="brand w-2/6 px-10 flex items-center h-full">
      <router-link to="/"> <h1 class="text-4xl">VAROTRA.co</h1></router-link>
    </div>
    <div class="menu w-4/6 px-10 flex items-center justify-end h-full">
      <div class="flex items-center mx-1">
        <input
          type="text"
          class="rounded-full shadow mx-3 h-7 transition duration-500 focus:outline-none focus:bg-gray-200 pl-7"
        />
        <div class="w-5 h-5 absolute ml-4">
          <v-icon class="text-gray-700" name="search"></v-icon>
        </div>
      </div>
      <router-link :to="{ name: 'Login' }" v-if="!loggedIn">
        <button
          class="mx-3 cursor-pointer hover:bg-gray-200 rounded-full transition duration-500 focus:outline-none "
        >
          <h1 class="px-1 text-gray-700">LOG IN</h1>
        </button>
      </router-link>
       <div
          class="w-8 h-8 mx-1 rounded-full hover:bg-gray-200 text-sm flex items-center justify-center transition duration-500 hover:shadow"
          v-if="loggedIn"
          @click='logout'
        >
          <v-icon
            class="w-5 h-5 fill-current text-gray-700"
            name="log-out"
          ></v-icon>
        </div>
      <router-link :to="{ name: 'Account' }" v-if="loggedIn">
        <div
          class="w-8 h-8 mx-1 rounded-full hover:bg-gray-200 text-sm flex items-center justify-center transition duration-500 hover:shadow"
        >
          <v-icon
            class="w-5 h-5 fill-current text-gray-700"
            name="user"
          ></v-icon>
        </div>
      </router-link>
      <router-link :to="{ name: 'Cart' }">
        <div class="flex items-center cursor-pointer ">
          <div
            class="w-8 h-8 absolute mx-1 rounded-full hover:bg-gray-200 text-sm flex items-center justify-center transition duration-500 hover:shadow"
          >
            <v-icon
              class="w-5 h-5 fill-current text-gray-700"
              name="shopping-cart"
            ></v-icon>
            <span
              v-if="cartLength"
              class="absolute top-0 ml-8 flex items-center justify-center bg-green-400 text-gray-100 text-xs w-5 h-5 rounded-full  font-semibold "
            >
              {{ cartLength}}
            </span>
          </div>
        </div>
      </router-link>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNavigation",
  computed: {
    ...mapGetters(["cartLength",'loggedIn']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
};
</script>

<style scoped>
.brand h1 {
  font-family: "Fredoka One", cursive;
}
</style>
