<template>
  <div
    v-if="type == 'material-icons'"
    class="chatdrawer-icon"
    :style="{ background: gradientColor(item?.label) }"
  >
    <q-icon
      class="material-icons drawer-icon"
      :style="{ color: iconColor(item?.label, item?.color) }"
    >
      {{ item?.icon }}
    </q-icon>
  </div>
  <div
    v-else
    class="chatdrawer-icon"
    :style="{ background: gradientColor(item?.label) }"
  >
    <q-icon
      :class="`mdi ${item?.icon} drawer-icon`"
      :style="{ color: iconColor(item?.label, item?.color) }"
    >
    </q-icon>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      get_isVisible: "storedata/get_isVisible",
      get_selectedLabel: "storedata/get_selectedLabel",
      get_expandScreen: "storedata/get_expandScreen",
    }),
  },
  name: "GenAIChatDrawerIcon",
  props: {
    item: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "material-icons",
    },
  },
  methods: {
    gradientColor(label) {
      if (this.type == "material-icons") {
        return this.get_isVisible && label == this.get_selectedLabel
          ? "linear-gradient(135deg, #0074E8 0%, #A933FB 100%)"
          : "transparent";
      } else {
        return this.get_isVisible && this.get_expandScreen
          ? "linear-gradient(135deg, #0074E8 0%, #A933FB 100%)"
          : "transparent";
      }
    },
    iconColor(label, color) {
      if (this.type == "material-icons") {
        return this.get_isVisible && label == this.get_selectedLabel
          ? "white"
          : color;
          
      } else {
        return this.get_isVisible && this.get_expandScreen ? "white" : color;
      }
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
.chat-drawer .chatdrawer-icon > .drawer-icon {
  font-size: 24px;
}
</style>
