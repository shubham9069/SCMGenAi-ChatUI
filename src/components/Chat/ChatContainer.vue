<template>
  <div class="message" :id="message?.id">
    {{ message?.text }}
  </div>
</template>

<script>
export default {
  name: "ChatContainter",
  props: ["message"],
};
</script>

<style>
.message {
  color: var(--hds-chatbox-warpper-message-color);
  font-style: normal;
  font-weight: var(--hds-chatbox-warpper-message-font-weight);
  font-size: var(--hds-chatbox-warpper-message-font-size);
  max-width: 100%;
  white-space: pre-line;
  padding: 1rem 0;
}
</style>
