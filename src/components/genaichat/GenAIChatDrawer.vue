<template>
  <div class="chat-drawer">
    <!-- left sidebox  -->
    <section
      class="sidebox"
      :style="{
        display: `${store.state.storedata.isVisible ? 'Block' : 'none'}`,
      }"
    >
      <div class="bottom">
        <keep-alive>
          <component
            :is="Component"
            v-bind="Props"
            @close="isVisible = false"
            :userDetails="userDetails"
          />
        </keep-alive>
      </div>
    </section>

    <!-- right toolkox bar  -->
    <div class="toolbar">
      <template
        v-for="section in store.state.storedata.toolkitItems"
        :key="section.section"
      >
        <template v-if="section.section == 'Section 1'">
          <GenAIChatDrawerIcon
            v-for="item in section.items"
            :key="item.label"
            :item="item"
            @click="ActiveComponent(item.label, item.Component, item.Props)"
          />

          <div class="line" />
        </template>

        <template v-if="section.section == 'Section 2'">
          <GenAIChatDrawerIcon
            v-for="item in section.items"
            :key="item.label"
            :item="item"
          />

          <div class="line" />
        </template>
        <template v-if="section.section == 'Section 3'">
          <GenAIChatDrawerIcon
            v-for="item in section.items"
            :key="item.label"
            :item="item"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import GenAIChatDrawerIcon from "./GenAIChatDrawerIcon.vue";
import { useStore } from "vuex";

// this comment used for to handle not usedcomponent importing warn
/* eslint-disable vue/no-unused-components */
export default {
  setup() {
    const store = useStore();

    return { store };
  },
  name: "GenAIChatDrawer",
  emits: ["closechat-drawer", "splitter"],
  components: {
    GenAIChatDrawerIcon,
  },
  data() {
    return {
      Component: "",
      Props: "",
    };
  },
  props: {
    userDetails: Object,
  },
  methods: {
    ActiveComponent(label, component, props) {
      this.Component = component;
      this.Props = props;
      this.store.commit("storedata/SelectedLabelFunc", label);

      // this.$emit("splitter", this.isVisible);
    },
  },
};
</script>

<style>
@import "../../assets/css/variable.css";

.chat-drawer {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  /* background: grey; */
  height: 100vh;
  display: flex;

  width: 100%;
  justify-content: flex-end;
}

.chat-drawer .line {
  height: 1px;
  width: 100%;
  background: #e7ecf1;
}

.sidebox {
  height: 100%;

  width: 100%;
  border: 1px solid #e7ecf1;
}
.toolbar {
  border: 1px solid #e7ecf1;
}

.sidebox > .bottom {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
