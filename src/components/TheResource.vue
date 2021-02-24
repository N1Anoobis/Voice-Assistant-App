<template>
  <section class="section">
    <BaseButton @click.native="setSelectedTab('stored-resources')"
      >Stored Resources</BaseButton
    >
    <BaseButton @click.native="setSelectedTab('add-resource')"
      >AddResources</BaseButton
    >
    <component :is="selectedTab"></component>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import BaseCard from "./UI/BaseCard.vue";
import BaseButton from "./UI/BaseButton.vue";
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddRecource.vue";

@Component({
  components: {
    BaseCard,
    BaseButton,
    StoredResources,
    AddResource,
  },
})
export default class TheResources extends Vue {
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

  @Provide("resources") resources: object[] = this.storedResources;

  selectedTab = "stored-resources";

  setSelectedTab(tab) {
    this.selectedTab = tab;
  }
}
</script>

<style scoped>
.section {
  text-align: center;
}
</style>
