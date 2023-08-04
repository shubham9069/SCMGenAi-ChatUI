<template>
  <div class="chat-profile-info">
    <div
      class="profile-icon"
      :style="{ padding: `${type == 'Ai' ? '5px' : '0px'}` }"
    >
      <span class="material-icons" v-if="type == 'Ai'"> auto_awesome </span>
      <img :src="$store.state.demostore.userDetails?.image" alt="" v-else />
    </div>
    <div class="ai-profile-head">
      <div class="profile-info">
        <span class="user-name">{{
          type == "Ai" ? "Ai Gen" : $store.state.demostore.userDetails?.name
        }}</span>
        <span class="chat-date">{{ moment(message?.date).fromNow() }}</span>
      </div>
    </div>
    <!-- collapse menu -->
    <span
      class="material-icons iconSize"
      :style="collapse"
      @click="$emit('collapseMessageContainer')"
    >
      keyboard_arrow_down
    </span>

    <div class="three-dot">
      <span
        class="material-icons iconSize"
        :style="{ color: 'grey' }"
        @click="this.dropDownToggle = !this.dropDownToggle"
      >
        more_horiz
      </span>

      <!-- // dropdown component -->
      <GenAIChatDropDown
        :dropDownToggle="dropDownToggle"
        :dropDownList="['OperationX', 'OperationY']"
      />
    </div>
  </div>
  <q-separator />
</template>

<script>
import GenAIChatDropDown from "src/components/genaichat/content/common/GenAIChatDropDown.vue";
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  // computed: {
  //   ...mapGetters("storedata", ["get_userDetails"]),
  // },
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
    moment: function () {
      return moment();
    },
  },
  computed: {
    collapse() {
      return {
        transform: `${this.collapseChat ? "rotate(0)" : "rotate(180deg)"}`,
        color: "grey",
      };
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
.profile-icon > img {
  object-fit: cover;
  width: 100%;
}

.three-dot {
  position: relative;
  cursor: pointer;
  display: flex;
}
</style>
