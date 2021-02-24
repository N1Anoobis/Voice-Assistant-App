<template>
  <div>
    <TheHeader title="Vue Pratcise App" />
    <!-- <StoredRecorces :resources="storedResources" /> -->
    <TheResourses />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheResourses from "./components/TheResource.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

@Component({
  components: { TheResourses, TheHeader },
})
export default class App extends Vue {}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Ubuntu;
}
</style>
