<template>
  <div class="chat-profile-info">
    <div
      class="profile-icon"
      :style="{ padding: `${type == 'Ai' ? '5px' : '0px'}` }"
    >
      <img :src="userDetails?.image" alt="" />
    </div>
    <div class="ai-profile-head">
      <div class="profile-info">
        <span class="user-name">{{ userDetails?.name }}</span>
        <span class="chat-date">16 May, 2:44 PM</span>
      </div>
    </div>
    <!-- collapse menu -->
    <img
      :style="{
        cursor: 'pointer',
        transform: `${collapseChat ? 'rotate(0)' : 'rotate(180deg)'}`,
      }"
      src="assets/icons/downArrow.png"
      @click="$emit('Collapse')"
    />
    <div class="three-dot">
      <svg
        @click="this.DropDown_Toggle = !this.DropDown_Toggle"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="menu_dots_horizontal">
          <path
            id="Union"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.75 12C6.75 12.9665 5.9665 13.75 5 13.75C4.0335 13.75 3.25 12.9665 3.25 12C3.25 11.0335 4.0335 10.25 5 10.25C5.9665 10.25 6.75 11.0335 6.75 12ZM12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75ZM19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z"
            fill="#656C78"
          />
        </g>
      </svg>

      <!-- // dropdown component -->
      <SCMDropDown
        :DropDown_Toggle="DropDown_Toggle"
        :List="['OperationX', 'OperationY']"
      />
    </div>
  </div>
  <div class="linegrey" />
</template>

<script>
import { markRaw } from "vue";
import SCMDropDown from "src/components/common/SCMDropDown.vue";

export default {
  name: "SCMChatHeader",
  emits: ["Collapse"],
  components: {
    SCMDropDown,
  },
  data() {
    return {
      DropDown_Toggle: false,
    };
  },
  props: {
    userDetails: Object,
    type: String,
    collapseChat: Boolean,
  },
};
</script>

<style>
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
  padding-bottom: 8px;
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
.wrapper-ai > .chat-ai > .linegrey {
  position: absolute;
  left: 0;
  width: 100%;
  height: 0.5px;
  background: #d0d7de;
}
.three-dot {
  position: relative;
  cursor: pointer;
  display: flex;
}


</style>
