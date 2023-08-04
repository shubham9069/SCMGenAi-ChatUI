<template>
  <div class="chatdrawer-icon" :style="gradientColor(item?.label)">
    <span
      class="material-icons"
      :style="{
        color: `${
          get_isVisible && item?.label == get_selectedLabel
            ? 'white'
            : item?.color
        }`,
      }"
    >
      {{ item?.icon }}
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("storedata", ["get_isVisible", "get_selectedLabel"]),
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
      return {
        background:
          this.get_isVisible && label == this.get_selectedLabel
            ? "linear-gradient(135deg, #0074E8 0%, #A933FB 100%)"
            : "transparent",
      };
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
