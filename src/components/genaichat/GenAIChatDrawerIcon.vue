<template>
  <div
    class="chatdrawer-icon"
    :style="{ background: gradientColor(item?.label) }"
  >
    <span
      class="material-icons"
      :style="{ color: iconColor(item?.label, item?.color) }"
    >
      {{ item?.icon }}
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      get_isVisible: "storedata/get_isVisible",
      get_selectedLabel: "storedata/get_selectedLabel",
    }),
  },
  name: "GenAIChatDrawerIcon",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    gradientColor(label) {
      return this.get_isVisible && label == this.get_selectedLabel
        ? "linear-gradient(135deg, #0074E8 0%, #A933FB 100%)"
        : "transparent";
    },
    iconColor(label, color) {
      return this.get_isVisible && label == this.get_selectedLabel
        ? "white"
        : color;
    },
  },
};
</script>

<style>
@import "src/assets/css/variable.css";
.chat-drawer .chatdrawer-icon {
  padding: 8px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.chat-drawer .chatdrawer-icon > span {
  font-size: 24px;
}
</style>
