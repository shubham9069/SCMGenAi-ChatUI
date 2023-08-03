<template>
  <div
    class="chatdrawer-icon"
    :style="{
      background: `${
        $store.state.storedata.isVisible &&
        item?.label == $store.state.storedata.selectedLabel
          ? 'linear-gradient(135deg, #0074E8 0%, #A933FB 100%)'
          : 'transparent'
      }`,
    }"
  >
    <img
      :src="
        $store.state.storedata.isVisible &&
        item?.label == $store.state.storedata.selectedLabel
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
    item: Object,
  },
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
