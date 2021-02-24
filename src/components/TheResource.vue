<template>
  <section class="section">
    <BaseButton
      @click.native="setSelectedTab('stored-resources')"
      :mode="storedResButton"
      >Stored Resources</BaseButton
    >
    <BaseButton
      @click.native="setSelectedTab('add-resource')"
      :mode="addResButton"
      >AddResources</BaseButton
    >
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import BaseCard from "./UI/BaseCard.vue";
import BaseButton from "./UI/BaseButton.vue";
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddRecource.vue";
import ResourceItem from "../interfaces";

@Component({
  components: {
    BaseCard,
    BaseButton,
    StoredResources,
    AddResource,
  },
})
export default class TheResources extends Vue {
  storedResources: Array<ResourceItem> = [
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
  @Provide("addNewRes") addNewRes: Function = this.addResource;
  @Provide("removeRes") removeRes: Function = this.removeResources;

  selectedTab = "stored-resources";

  setSelectedTab(tab) {
    this.selectedTab = tab;
  }

  get storedResButton() {
    return this.selectedTab === "stored-resources" ? null : "flat";
  }

  get addResButton() {
    return this.selectedTab === "add-resource" ? null : "flat";
  }

  addResource(title, description, link) {
    const newResources: ResourceItem = {
      id: new Date().toISOString(),
      title,
      description,
      link,
    };
    this.storedResources.unshift(newResources);
    this.selectedTab = "stored-resources";
  }

  removeResources(resId) {
    const resIndex = this.storedResources.findIndex((res) => res.id === resId);
    this.storedResources.splice(resIndex, 1);
  }
}
</script>

<style scoped>
.section {
  text-align: center;
}
</style>
