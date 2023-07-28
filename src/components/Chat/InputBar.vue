<template>
  <div class="chat-form">
    <div class="chat-input-group">
      <div class="chat-icon" @click="selectMedia">
        <input
          type="file"
          id="MessageFile"
          hidden
          @change="($event) => (this.messageFile = $event.target.files)"
        />
        <img src="assets/icons/paperclip.png" alt="" />
      </div>
      <input
        type="text"
        name="query"
        :placeholder="inputBoxPlaceholder"
        class="chat-textbox"
        @keyup.enter="
          ($event) => {
            $emit('message', $event.target.value);
            $event.target.value = '';
          }
        "
        autocomplete="off"
      />
      <div class="chat-icon2">
        <img src="assets/icons/mic.png" alt="" />
      </div>
      <div class="chat-icon2">
        <img src="assets/icons/send.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
export default {
  name: "InputBar",
  components: {},
  props: ["inputBoxPlaceholder"],
  data() {
    return {
      messageFile: {},
    };
  },
  methods: {
    selectMedia() {
      console.log(this.messageFile);
      var element = document.getElementById("MessageFile");
      element.click();
    },
  },
};
</script>

<style>
.chat-form {
  width: var(--hds-chatbox-form-width);
  height: var(--hds-chatbox-form-height);
  background: var(--hds-chatbox-form-background);
  border: var(--hds-chatbox-form-border);
  border-radius: var(--hds-chatbox-form-border-radius);
  padding: var(--hds-chatbox-form-padding);
}

.chat-form .chat-input-group {
  width: var(--hds-chatbox-form-input-width);
  display: grid;
  grid-template-columns: var(--hds-chatbox-form-input-grid-template-columns);
  align-items: center;
  border: var(--hds-chatbox-form-input-border);
  border-radius: var(--hds-chatbox-form-input-border-radius);
  height: 100%;
}

.chat-form .chat-input-group .chat-icon,
.chat-icon2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.chat-form .chat-input-group .chat-icon > img {
  height: var(--hds-chatbox-form-input-chat-icon-height);
  width: var(--hds-chatbox-form-input-chat-icon-width);
  transform: rotate(-45deg);
}

.chat-form .chat-input-group .chat-icon2 > img {
  height: var(--hds-chatbox-form-input-chat-icon-height);
  width: var(--hds-chatbox-form-input-chat-icon-width);
}

.chat-textbox {
  width: var(--hds-chatbox-form-input-chat-text-box-width);
  color: var(--hds-chatbox-form-input-chat-text-box-color);
  font-size: var(--hds-chatbox-form-input-chat-text-box-font-size);
  padding: var(--hds-chatbox-form-input-chat-text-box-padding);
  background: transparent;
  border-radius: var(--hds-chatbox-form-input-chat-border-radius);
  border: none;
  outline: none;
}

.chat-textbox::placeholder {
  color: var(--hds-chatbox-form-input-chat-placeholder-color);
  font-size: var(--hds-chatbox-form-input-chat-placeholder-font-size);
}
</style>
