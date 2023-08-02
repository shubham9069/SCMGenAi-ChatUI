<template>
  <div
    class="chatdrawer-icon"
    :style="{
      background: `${
        isVisible && item?.label == selectedLabel
          ? 'linear-gradient(135deg, #0074E8 0%, #A933FB 100%)'
          : 'transparent'
      }`,
    }"
  >
    <img
      :src="
        isVisible && item?.label == selectedLabel
          ? item?.selectedIcon
          : item?.icon
      "
    />
  </div>
</template>

<script>
export default {
  name: "GenAIChatDrawerIcon",
  props: {
  item :Object,
  isVisible:Boolean,
  selectedLabel:String
  }
};
</script>

<style>
@import "../../assets/css/variable.css";
.chat-drawer .chatdrawer-icon {
  padding: 8px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.chat-drawer .chatdrawer-icon > img {
  width: var(--hds-chatbox-header-logo-width);
  height: var(--hds-chatbox-header-logo-height);
}
</style>
