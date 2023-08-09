<template>
  <div class="chat-profile-info">
    <div class="profile-icon" :style="{ padding: profileIconPadding }">
      <q-icon class="material-icons" v-if="type == 'Ai'"> auto_awesome </q-icon>

      <q-avatar v-else size="32px">
        <img :src="userDetails?.image" alt="" />
      </q-avatar>
    </div>
    <div class="ai-profile-head">
      <div class="profile-info">
        <span class="user-name">{{ userName }}</span>

        <span class="chat-date">{{ moment(message?.date) }}</span>
      </div>
    </div>
    <!-- collapse menu -->
    <q-icon
      class="material-icons iconSize"
      :style="collapse"
      @click="$emit('collapseMessageContainer')"
    >
      keyboard_arrow_down
    </q-icon>

    <q-btn-dropdown
      dropdown-icon="more_horiz"
      unelevated
      dense
      text-color="grey"
    >
      <!-- // dropdown component -->
      <GenAIChatDropDown
        :dropDownToggle="dropDownToggle"
        :dropDownList="['OperationX', 'OperationY']"
      />
    </q-btn-dropdown>
  </div>
  <q-separator />
</template>

<script>
import GenAIChatDropDown from "src/components/genaichat/content/common/GenAIChatDropDown.vue";
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  name: "GenAIChatMessageHeader",
  emits: ["collapseMessageContainer"],
  components: {
    GenAIChatDropDown,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    collapseChat: {
      type: Boolean,
      required: true,
    },
    message: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dropDownToggle: false,
    };
  },
  methods: {
    moment: function (date) {
      return moment(date).fromNow();
    },
    dropDownToggleFunc() {
      return (this.dropDownToggle = !this.dropDownToggle);
    },
  },
  computed: {
    ...mapGetters({
      userDetails: "demodata/get_userDetails",
    }),
    collapse() {
      return {
        transform: `${this.collapseChat ? "rotate(0)" : "rotate(180deg)"}`,
        color: "grey",
      };
    },
    profileIconPadding() {
      return this.type == "Ai" ? "5px" : "0px";
    },
    userName() {
      return this.type == "Ai" ? "Ai Gen" : this.userDetails?.name;
    },
  },
};
</script>

<style>
@import "src/assets/css/variable.css";
.ai-profile-head {
  display: grid;
  grid-template-columns: var(
    --hds-chatbox-warpper-profile-head-grid-template-columns
  );

  width: var(--hds-chatbox-warpper-profile-head-width);
}
.chat-profile-info {
  display: flex;
  align-items: center;
  gap: var(--hds-chatbox-chat-profile-gap);
  padding: 8px 16px;
}
.chat-profile-info .profile-icon {
  height: var(--hds-chatbox-chat-profile-height) !important;
  width: var(--hds-chatbox-chat-profile-height) !important;
  min-width: var(--hds-chatbox-chat-profile-width);
  border-radius: var(--hds-chatbox-chat-profile-border-radius);
  overflow: hidden;
  background: var(--hds-chatbox-chat-profile-background);
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-profile-info .profile-info {
  display: flex;
  flex-direction: column;
  gap: 3;
}

.chat-profile-info .profile-info .user-name {
  font-size: var(--hds-chatbox-chat-profile-font-size);
  font-weight: var(--hds-chatbox-chat-profile-font-weight);
  color: #343a40;
}

.chat-profile-info .profile-info .chat-date {
  color: var(--hds-chatbox-chat-profile-date-font-color);
  font-size: var(--hds-chatbox-chat-profile-date-font-size);
  font-weight: var(--hds-chatbox-chat-profile-date-font-weight);
}
</style>
