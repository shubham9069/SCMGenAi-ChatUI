<template>
  <q-separator />
  <div class="chat-footer">
    <!-- collapse menu -->
    <q-icon
      v-for="image in iconArr"
      :key="image.name"
      :class="`mdi ${image.src}`"
      :style="{ color: `${image.color}` }"
    ></q-icon>
  </div>
</template>

<script>
export default {
  name: "GenAIChatMessageFooter",
  props: {
    iconArr: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
@import "src/assets/css/variable.css";
.chat-footer {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  grid-gap: 20px;
}
.chat-footer > span {
  font-size: 17px;
  cursor: pointer;
}
</style>
