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

<style>
.chat-dropdown {
  padding: 0.5rem !important;
  width: max-content;
  min-width: 110px;
  position: absolute;
  z-index: 111;
  top: 10px;
  background: white;
  right: 0;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.chat-dropdown p {
  font-size: 12px;
  margin: 0 !important;
}
.chat-dropdown > li {
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  cursor: pointer;
}
.chat-dropdown > li:hover {
  background-color: #eef6ff;
}
.chat-dropdown > li:hover p {
  color: #00a3ff !important;
}
</style>
