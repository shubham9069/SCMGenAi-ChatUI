<template>
  <div class="chat-box-suggestion-div">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "GenAIPromptSuggestion",
  props: {
    title: String,
  },
};
</script>

<style>
@import "../../../../assets/css/variable.css";

.chat-container .suggestion-box > .chat-box-suggestion-div {
  margin: 0;
}

.chat-box-suggestion-div {
  display: flex;
  align-items: center;
  grid-gap: var(--hds-chatbox-saved-template-head-gap);
  background: var(--hds-chatbox-saved-template-card-background);
  border: var(--hds-chatbox-saved-template-card-border);
  border-radius: var(--hds-chatbox-saved-template-card-border-radius);
  padding: var(--hds-chatbox-saved-template-card-padding);
  color: var(--hds-chatbox-saved-template-card-color);
  font-size: var(--hds-chatbox-saved-template-card-font-size);
  font-weight: var(--hds-chatbox-saved-template-card-font-weight);
  cursor: pointer;
  margin: var(--hds-chatbox-saved-template-list-margin);
  line-height: 21px;
}
</style>
