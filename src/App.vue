<template>
  <div id="app" class="poppins">
    <TheNavigation />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      :duration="500"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import TheNavigation from "./components/TheNavigation.vue";
export default {
  name: "App",
  components: {
    TheNavigation,
  },
  created(){
    this.$store.getters
  }
};
</script>
<style>
#app {
  height: 80%;
}
@font-face {
  font-family: "Fredoka One";
  src: local("Fredoka One"),
    url(./assets/FredokaOne-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Poppins";
  src: local("Poppins"), url(./assets/Poppins-Light.ttf) format("truetype");
}

.poppins {
  font-family: "Poppins", sans-serif;
}
</style>
