<template>
  <div>
    <StoredRecorces :resources="storedResources" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StoredRecorces from "./components/StoredResources.vue";

@Component({
  components: { StoredRecorces },
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
}
html {
  font-family: "Roboto", sans-serif;
}
</style>
