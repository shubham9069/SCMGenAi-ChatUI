<template>
  <div class="chat-form">
    <div class="chat-input-group">
      <div class="chat-icon" v-if="!messageFile">
        <q-file v-model="messageFile" dense borderless color="grey">
          <q-icon class="mdi mdi-paperclip"></q-icon>
        </q-file>
      </div>
      <div class="chat-icon" @click="deselectMedia" v-else>
        <q-icon class="mdi mdi-progress-close"></q-icon>
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

      <div class="chat-icon" @click="startRecognition" v-if="mic">
        <q-icon class="mdi mdi-microphone"></q-icon>
      </div>
      <div class="chat-icon" @click="stopRecognition" v-else>
        <q-spinner-audio color="grey" />
      </div>
      <div class="chat-icon" @click="sentMessage">
        <q-icon class="mdi mdi-send-circle"></q-icon>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
export default {
  name: "GenAIChatUInputBar",
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
      recognition: null,
    };
  },
  methods: {
    deselectMedia() {
      this.messageFile = "";
    },
    sentMessage() {
      if (!this.inputText) return;
      this.$store.dispatch("storedata/sentMessage", this.inputText);
      this.inputText = "";
    },
    startRecognition() {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.onresult = (e) => {
        var str = "";
        var transcript = e.results[e.results.length - 1][0].transcript;

        this.inputText += transcript + " ";
      };
      this.recognition.start();
      this.recognition.onstart = () => {
        this.mic = false;
      };
    },
    stopRecognition() {
      if (this.recognition) {
        this.recognition.stop();
        this.mic = true;
      }
    },
  },
};
</script>

<style>
.chat-form {
  width: var(--hds-chatbox-form-width);
  height: var(--hds-chatbox-form-height);
  padding: var(--hds-chatbox-form-padding);
}

.chat-form .chat-input-group {
  width: var(--hds-chatbox-form-input-width);
  display: grid;
  grid-template-columns: var(--hds-chatbox-form-input-grid-template-columns);
  align-items: center;
  background: white;
  border: var(--hds-chatbox-form-input-border);
  border-radius: 18px;
  height: 100%;
  padding: 0 10px;
}

.chat-form .chat-input-group .chat-icon,
.chat-icon2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.chat-form .chat-input-group .mdi-paperclip {
  margin-right: 8px;
  align-self: center;
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
