<template>
  <div>
    <TheHeader title="Vue Pratcise App" />
    <StoredRecorces :resources="storedResources" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StoredRecorces from "./components/StoredResources.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

@Component({
  components: { StoredRecorces, TheHeader },
})
export default class App extends Vue {
  storedResources: Array<object> = [
    {
      id: "official-guide",
      title: "Official Guide",
      description: "The official Vue.js documentacion",
      link: "https://vuejs.org",
    },
    {
      id: "google",
      title: "Google",
      description: "The official Google",
      link: "https://google.com",
    },
  ];
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Ubuntu;
}
</style>
