<template>
  <div>
    <ul v-for="res in resources" :key="res.id">
      <ResourceItem :data="res" />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";
import ResourceItem from "./ResourceItem.vue";
@Component({
  components: {
    ResourceItem,
  },
})
export default class StoredRecorces extends Vue {
  @Inject() resources: object;
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
  list-style: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
