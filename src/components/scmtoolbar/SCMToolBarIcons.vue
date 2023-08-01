<template>
  <div
    class="sidebaricon"
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
  name: "SCMToolBarIcon",
  props: ["item", "isVisible", "selectedLabel"],
};
</script>

<style>
@import "../../css/variable.css";
.sidebar .sidebaricon {
  padding: 8px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.sidebar .sidebaricon > img {
  width: var(--hds-chatbox-header-logo-width);
  height: var(--hds-chatbox-header-logo-height);
}
</style>
