<template>
  <div class="linegrey" />
  <div class="chat-Footer">
    <!-- collapse menu -->
    <img
      :style="{
        cursor: 'pointer',
      }"
      src="assets/icons/FooterIcon1.png"
    />
    <img
      :style="{
        cursor: 'pointer',
      }"
      src="assets/icons/Footer2.png"
    />
    <img
      :style="{
        cursor: 'pointer',
      }"
      src="assets/icons/Footer3.png"
    />
    <img
      :style="{
        cursor: 'pointer',
      }"
      src="assets/icons/Footer4.png"
    />
  </div>
</template>

<script>
export default {
  name: "ChatFooter",
};
</script>

<style>
.chat-Footer {
  display: flex;
  align-items: center;
  padding-top: 8px;
  grid-gap: 20px;
}
.chat-Footer > img {
  width: 17px;
  height: 17px;
}
</style>
