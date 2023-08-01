<template>
  <div class="sidebar">
    <!-- left sidebox  -->
    <section
      class="sidebox"
      :style="{ display: `${isVisible ? 'Block' : 'none'}` }"
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
      <template v-for="section in toolkitItems" :key="section.section">
        <template v-if="section.section == 'Section 1'">
          <SCMToolBarIcons
            v-for="item in section.items"
            :key="item.label"
            :item="item"
            @click="ActiveComponent(item.label, item.Component, item.Props)"
            :isVisible="isVisible"
            :selectedLabel="selectedLabel"
          >
          </SCMToolBarIcons>
          <div class="line" />
        </template>

        <template v-if="section.section == 'Section 2'">
          <SCMToolBarIcons
            v-for="item in section.items"
            :key="item.label"
            :item="item"
            :isVisible="isVisible"
            :selectedLabel="selectedLabel"
          >
          </SCMToolBarIcons>
          <div class="line" />
        </template>
        <template v-if="section.section == 'Section 3'">
          <SCMToolBarIcons
            v-for="item in section.items"
            :key="item.label"
            :item="item"
            :isVisible="isVisible"
            :selectedLabel="selectedLabel"
          >
          </SCMToolBarIcons>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { markRaw } from "vue";
import SCMChat from "../scmchat/SCMChatEntry.vue";
import SCMRecent from "../scmrecent/SCMRecentEntry.vue";
import SCMToolBarIcons from "./SCMToolBarIcons.vue";

// this comment used for to handle not usedcomponent importing warn
/* eslint-disable vue/no-unused-components */
export default {
  name: "SCMToolbarEntry",
  emits: ["closeSidebar", "splitter"],
  components: {
    SCMToolBarIcons,
    SCMChat,
    SCMRecent,
  },
  data() {
    return {
      Component: "",
      Props: "",
      toolkitItems: [
        {
          section: "Section 1",
          items: [
            {
              label: "Ai",
              routerLink: "",
              icon: "./assets/icons/ai-gradient.svg",
              selectedIcon: "./assets/icons/AI.svg",
              padding: 8,
              Component: markRaw(SCMChat),
              Props: {
                chatBoxStyle: {
                  logo: "./assets/icons/ai-gradient.svg",
                },
                emptyChatContent: {
                  showEmptyChatHeader: true,
                  title: "AI-Driven Insights Companion",
                  inputPlaceholder: "Ask your data question",
                  searchIcon: "../assets/icons/search.svg",
                },
                chatBoxHeader: {
                  title: "AI Exploration",
                  showChatBoxHeader: true,
                },
                savedTemplates: {
                  icon: "../assets/icons/search-blue.svg",
                  title: "Or Start With One of a Common Prompts",
                  useTemplate: true,
                  showSavedTemplate: true,
                  templates: [
                    {
                      title: "Which category has most growth potential?",
                      routerLink: "",
                    },
                    {
                      title: "Which brands should be delisted? ",
                      routerLink: "",
                    },
                    {
                      title: "How are Price Driven Customers behaving?",
                      routerLink: "",
                    },
                  ],
                },
                QuasarTagButton: {
                  color: "primary",
                },
              },
            },
            {
              label: "Recent",
              routerLink: "",
              icon: "./assets/icons/history.svg",
              selectedIcon: "./assets/icons/white-history.svg",
              padding: 10,
              Component: markRaw(SCMRecent),
              Props: {
                chatBoxHeader: {
                  title: "Recent",
                  showChatBoxHeader: true,
                },
                Content: "shubham Recent Search ",
              },
            },
          ],
        },
        {
          section: "Section 2",
          items: [
            {
              label: "Add",
              routerLink: "",
              icon: "./assets/icons/plus.svg",
              selectedIcon: "./assets/icons/plus-white.svg",
              padding: 10,
            },
            {
              label: "Notification",
              routerLink: "",
              icon: "./assets/icons/bell.svg",
              selectedIcon: "./assets/icons/notification-white.svg",
              padding: 10,
            },
            {
              label: "Setting",
              routerLink: "",
              icon: "./assets/icons/cog.svg",
              selectedIcon: "`./assets/icons/setting-white.svg",
              padding: 10,
            },
          ],
        },
        {
          section: "Section 3",
          items: [
            {
              label: "Chat",
              routerLink: "",
              icon: "./assets/icons/comments.svg",
              selectedIcon: "./assets/icons/chat-white.svg",
              padding: 10,
            },
          ],
        },
      ],
      selectedLabel: "",
      isVisible: false,
    };
  },
  props: {
    userDetails: Object,
  },
  methods: {
    ActiveComponent(label, component, props) {
      this.Component = component;
      this.Props = props;
      if (label == this.selectedLabel) {
        this.isVisible = !this.isVisible;
      } else {
        this.isVisible = true;
      }
      this.selectedLabel = label;
      this.$emit("splitter", this.isVisible);
    },
  },
};
</script>

<style>
@import "../../css/variable.css";

.sidebar {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  /* background: grey; */
  height: 100vh;
  display: flex;

  width: 100%;
  justify-content: flex-end;
}

.sidebar .line {
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
