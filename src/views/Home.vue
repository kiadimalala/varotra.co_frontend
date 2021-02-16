<template>
  <div class="home px-24 flex my-10">
    <div class="w-1/6 mx-10">
      <ul class="flex flex-col">
        <router-link
          class="category my-2 cursor-pointer"
          v-for="category in categories"
          :key="category.id"
          :to="{ name: 'Category', params: { id: category.id } }"
          >{{ category.title }}</router-link
        >
      </ul>
    </div>
    <div class="w-5/6">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["categories"]),
  },
  created() {
    this.$store.dispatch("getCategories");
  },
};
</script>
