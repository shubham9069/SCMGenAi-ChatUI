<template>
  <div class="chat-form">
    <div class="chat-input-group">
      <div class="chat-icon" @click="selectMedia" v-if="!messageFile">
        <input type="file" id="messageFile" hidden @change="handleFile" />
        <span class="mdi mdi-paperclip"></span>
      </div>
      <div class="chat-icon" @click="deselectMedia" v-else>
        <span class="mdi mdi-progress-close"></span>
      </div>
      <q-input
        @keyup.enter="sentMessage"
        v-model="inputText"
        :placeholder="inputBoxPlaceholder"
        type="text"
        :value="inputText"
        name="query"
        dense
        unelevated
        borderless
      />

      <div class="chat-icon" @click="speedReconization" v-if="mic">
        <span class="mdi mdi-microphone"></span>
      </div>
      <div class="chat-icon" @click="speedReconization" v-else>
        <q-spinner-audio color="grey" />
      </div>
      <div class="chat-icon" @click="sentMessage">
        <span class="mdi mdi-send-circle"></span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
export default {
  name: "GenAIChatUInputBar",
  emits: ["inputValueChatUi"],
  props: {
    inputBoxPlaceholder: {
      type: String,
      required: false,
      default: "Type Here ... ",
    },
  },
  data() {
    return {
      messageFile: "",
      inputText: "",
      mic: true,
    };
  },
  methods: {
    selectMedia() {
      var element = document.getElementById("messageFile");
      element.click();
    },
    deselectMedia() {
      this.messageFile = "";
    },
    handleFile(event) {
      this.messageFile = event.target.files;
    },
    sentMessage() {
      if (!this.inputText) return;
      this.$store.dispatch("storedata/sentMessage", this.inputText);
      this.inputText = "";
    },
    speedReconization() {
      let recognization = new webkitSpeechRecognition();

      recognization.onresult = (e) => {
        var transcript = e.results[0][0].transcript;
        this.inputText += " " + transcript;

        //  output.classList.remove("hide")
        //  action.innerHTML = "";
      };
      recognization.start();
      recognization.onstart = () => {
        this.mic = false;
      };
      recognization.onspeechend = () => {
        recognization.stop();
        this.mic = true;
      };
    },
  },
};
</script>

<style>
@import "src/assets/css/variable.css";
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
  cursor: pointer;
}

.chat-form .chat-input-group .chat-icon {
  font-size: 20px;
  color: grey;
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
