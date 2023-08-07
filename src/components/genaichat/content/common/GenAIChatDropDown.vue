<template>
  <q-list>
    <q-item
      clickable
      v-close-popup
      v-for="element in dropDownList"
      :key="element"
    >
      <q-item-section>
        <q-item-label>{{ element }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: "GenAIChatDropDown",
  props: {
    dropDownToggle: {
      type: Boolean,
      required: true,
    },
    dropDownList: {
      type: Array,
      required: false,
      defaultValue: () => {
        return ["Pin"];
      },
    },
  },
  computed: {
    toggle() {
      return { display: this.dropDownToggle ? "Block" : "none" };
    },
  },
};
</script>

<style></style>
