<template>
  <div class="chat-drawer">
    <!-- left sidebox  -->
    <section class="sidebox" :style="{ display: getVisible }">
      <div class="bottom">
        <keep-alive>
          <GenAIChatPage v-bind="chatProps" v-if="get_selectedLabel == 'Ai'" />
        </keep-alive>
        <keep-alive>
          <GenAIChatRecent
            v-bind="recentProps"
            v-if="get_selectedLabel == 'Recent'"
          />
        </keep-alive>
      </div>
    </section>

    <!-- right toolbar  -->
    <div class="toolbar">
      <template v-for="section in toolkitItems" :key="section.section">
        <template v-if="section.section == 'Section 1'">
          <GenAIChatDrawerIcon
            v-for="item in section.items"
            :key="item.label"
            :item="item"
            @click="activeComponent(item.label)"
          />

          <q-separator />
        </template>

        <template v-else-if="section.section == 'Section 2'">
          <GenAIChatDrawerIcon
            v-for="item in section.items"
            :key="item.label"
            :item="item"
            @click="activeComponent(item.label)"
          />

          <q-separator />
        </template>
        <template v-else-if="section.section == 'Section 3'">
          <GenAIChatDrawerIcon
            v-for="item in section.items"
            :key="item.label"
            :item="item"
            @click="activeComponent(item.label)"
          />
        </template>
        <template v-else>
          <GenAIChatDrawerIcon
            v-for="item in section.items"
            :key="item.label"
            :item="item"
            type="mdi-5"
            @click="expandDrawer()"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import GenAIChatDrawerIcon from "src/components/genaichat/GenAIChatDrawerIcon.vue";
import GenAIChatPage from "src/components/genaichat/GenAIChatPage.vue";
import GenAIChatRecent from "src/components/genaichat/recent/GenAIChatRecent.vue";
import { mapGetters } from "vuex";

// this comment used for to handle not usedcomponent importing warn
/* eslint-disable vue/no-unused-components */
export default {
  name: "GenAIChatDrawer",

  components: {
    GenAIChatDrawerIcon,
    GenAIChatPage,
    GenAIChatRecent,
  },
  data() {
    return {
      chatProps: {
        emptyChatContent: {
          title: "AI-Driven Insights Companion",
          inputPlaceholder: "Ask your data question",
        },
        chatBoxHeader: {
          title: "AI Exploration",
        },
        savedTemplates: {
          // required
          title: "Or Start With One of a Common Prompts",
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
      },
      recentProps: {
        chatBoxHeader: {
          // require
          title: "Recent",
          showChatBoxHeader: true,
        },
        content: "shubham Recent Search ",
      },
      toolkitItems: [
        {
          section: "Section 1",
          items: [
            {
              label: "Ai",
              routerLink: "",
              icon: "auto_awesome",
              color: "#25282E",
            },
            {
              label: "Recent",
              routerLink: "",
              icon: "restore",
              color: "#25282E",
            },
          ],
        },
        {
          section: "Section 2",
          items: [
            {
              label: "Add",
              routerLink: "",
              icon: "add",

              color: "#25282E",
            },
            {
              label: "Notification",
              routerLink: "",
              icon: "notifications_none",

              color: "#25282E",
            },
            {
              label: "Setting",
              routerLink: "",
              icon: "settings_suggest",

              color: "#25282E",
            },
          ],
        },
        {
          section: "Section 3",
          items: [
            {
              label: "Chat",
              routerLink: "",
              icon: "forum",

              color: "#25282E",
            },
          ],
        },
        {
          section: "Section 4",
          items: [
            {
              label: "expand",
              routerLink: "",
              icon: "mdi-arrow-expand",
              color: "#25282E",
            },
          ],
        },
      ],
    };
  },
  methods: {
    activeComponent(itemLabel) {
      this.$store.dispatch("storedata/selectedLabelFunc", itemLabel);
    },
    expandDrawer() {
      this.$store.dispatch("storedata/expandScreenToggle");
    },
  },
  computed: {
    ...mapGetters({
      get_isVisible: "storedata/get_isVisible",
      get_selectedLabel: "storedata/get_selectedLabel",
    }),
    getVisible() {
      return this.get_isVisible ? "Block" : "none";
    },
  },
};
</script>

<style>
.icon-size {
  font-size: 20px;
  cursor: pointer;
}
.chat-drawer {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  /* background: grey; */
  height: 100vh;
  display: flex;

  width: 100%;
  justify-content: flex-end;
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
