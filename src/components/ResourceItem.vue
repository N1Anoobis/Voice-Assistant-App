<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ data.title }}</h3>
        <BaseButton mode="flat" @click.native="removeRes(data.id)"
          >Delete</BaseButton
        >
      </header>

      <p>{{ data.description }}</p>
      <nav>
        <a :href="data.link">View resource</a>
      </nav>
    </BaseCard>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from "vue-property-decorator";
import BaseCard from "./UI/BaseCard.vue";
import BaseButton from "./UI/BaseButton.vue";

@Component({
  components: { BaseCard, BaseButton },
})
export default class ResourceItem extends Vue {
  @Prop() data: object;
  @Prop() id: string;
  @Inject() removeRes: Function;
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
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
