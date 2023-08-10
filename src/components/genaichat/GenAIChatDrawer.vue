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
      <GenAIChatDrawerIcon
        :item="{
          icon: 'auto_awesome',
          color: '#25282E',
          label: 'Ai',
        }"
        @click="activeComponent('Ai')"
      />
      <GenAIChatDrawerIcon
        :item="{
          icon: 'restore',
          color: '#25282E',
          label: 'Recent',
        }"
        @click="activeComponent('Recent')"
      />

      <q-separator />
      <GenAIChatDrawerIcon
        :item="{
          icon: 'add',
          color: '#25282E',
          label: 'Add',
        }"
        @click="activeComponent('Add')"
      />
      <GenAIChatDrawerIcon
        :item="{
          icon: 'notifications_none',
          color: '#25282E',
          label: 'Notification',
        }"
        @click="activeComponent('Notification')"
      />
      <GenAIChatDrawerIcon
        :item="{
          icon: 'settings_suggest',
          color: '#25282E',
          label: 'Setting',
        }"
        @click="this.editor = true"
      />

      <q-separator />

      <GenAIChatDrawerIcon
        :item="{
          icon: 'forum',
          color: '#25282E',
          label: 'Fourm',
        }"
        @click="activeComponent('Fourm')"
      />
      <GenAIChatDrawerIcon
        :item="{
          icon: 'mdi-arrow-expand',
          color: '#25282E',
        }"
        type="mdi-5"
        @click="expandDrawer()"
      />
    </div>
  </div>
  <q-dialog v-model="editor">
    <GenAIChatEditarModal />
  </q-dialog>
</template>

<script>
import GenAIChatDrawerIcon from "src/components/genaichat/GenAIChatDrawerIcon.vue";
import GenAIChatPage from "src/components/genaichat/GenAIChatPage.vue";
import GenAIChatRecent from "src/components/genaichat/recent/GenAIChatRecent.vue";
import GenAIChatEditarModal from "src/components/genaichat/editor/GenAIChatEditarModal.vue";
import { mapGetters } from "vuex";

// this comment used for to handle not usedcomponent importing warn
/* eslint-disable vue/no-unused-components */
export default {
  name: "GenAIChatDrawer",

  components: {
    GenAIChatDrawerIcon,
    GenAIChatPage,
    GenAIChatRecent,
    GenAIChatEditarModal,
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
      editor: false,
    };
  },
  methods: {
    activeComponent(itemLabel) {
      this.$store.dispatch("storedata/selectedLabelFunc", itemLabel);
    },
    expandDrawer() {
      if (this.get_isVisible) {
        this.$store.dispatch("storedata/expandScreenToggle");
      }
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
