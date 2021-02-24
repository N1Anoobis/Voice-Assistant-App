<template>
  <div>
    <BaseDialog v-if="isInvalid" title="Invalid Input" @close="confirmError">
      <template #default>
        <p>some of inputs values are invalid</p>
        <p>please check all inputs</p>
      </template>
      <template #actions>
        <BaseButton @click.native="confirmError">Okay</BaseButton>
      </template>
    </BaseDialog>
    <BaseCard>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" v-model="titleInput" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            v-model="descInput"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input id="link" name="link" type="url" v-model="linkInput" />
        </div>
        <div>
          <BaseButton type="submit">Add Resource</BaseButton>
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import BaseCard from "./UI/BaseCard.vue";
import BaseButton from "./UI/BaseButton.vue";
import BaseDialog from "./UI/BaseDialog.vue";

@Component({
  components: {
    BaseCard,
    BaseButton,
    BaseDialog,
  },
})
export default class AddResource extends Vue {
  titleInput = "";
  descInput = "";
  linkInput = "";
  isInvalid = false;
  @Inject() addNewRes: Function;

  submitData() {
    const enteredTitle = this.titleInput;
    const enteredDesc = this.descInput;
    const enteredLink = this.linkInput;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredLink.trim() === ""
    ) {
      this.isInvalid = true;
      return;
    }

    this.addNewRes(enteredTitle, enteredDesc, enteredLink);
  }
  confirmError() {
    this.isInvalid = !this.isInvalid;
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
