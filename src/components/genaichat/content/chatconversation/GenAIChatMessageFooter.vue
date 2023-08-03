<template>
  <div class="linegrey" />
  <div class="chat-Footer">
    <!-- collapse menu -->
    <img v-for="image in iconArr" :key="image.name" :src="image.src" />
  </div>
</template>

<script>
export default {
  name: "GenAIChatMessageFooter",
  props: {
    iconArr: Array,
  },
};
</script>

<style>
.chat-Footer {
  display: flex;
  align-items: center;
  padding: 8px 0;
  grid-gap: 20px;
}
.chat-Footer > img {
  width: 17px;
  height: 17px;
  cursor: pointer;
}
</style>
