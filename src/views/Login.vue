<template>
  <div class="px-20 my-8 h-full flex justify-center items-center ">
    <div
      class="shadow-lg w-96 p-4 rounded-md flex flex-col items-center bg-gray-100"
    >
      <h1 class="text-2xl font-semibold uppercase">Sign in</h1>
      <hr class="w-full my-1" />
      <div class="w-full flex flex-col h-full items-start my-2">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="identifier"
          class="w-full h-10 border focus:outline-none pl-2"
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          class="w-full h-10 border focus:outline-none pl-2"
        />
      </div>
      <button
        @click.prevent="logIn"
        class="w-full h-10 bg-gray-800 text-gray-50 text-lg uppercase my-2 rounded-md focus:outline-none hover:bg-gray-100 border hover:text-gray-800 hover:border-gray-800 transition duration-500 "
      >
        Log in
      </button>
      <h1 class="w-full text-right">forgot password?</h1>
      <h1 class="text-xs my-1">
        Don't have an account?
        <router-link :to="{name: 'Register'}">
            <span class="text-green-400 font-bold cursor-pointer">Sign-up</span>
        </router-link>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      identifier: "",
      password: "",
    };
  },
  methods: {
    logIn() {
      this.$store
        .dispatch("logIn", {
          identifier: this.identifier,
          password: this.password,
        })
        .then(() => {
            this.$router.push("/");
        });
    },
  },
};
</script>

<style scoped></style>
