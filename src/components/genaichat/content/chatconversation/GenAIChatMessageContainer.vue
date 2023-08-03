<template>
  <div class="message" :id="message?.id" v-if="!message.isDisabled">
    {{ message?.text }}
  </div>
  <div class="message" v-else>
    <div class="loader">
      <div class="dot" v-for="dot in [...Array(3)]" :key="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenAIChatMessageContainer",
  props: { message: Object },
};
</script>

<style>
@import "/src/assets/css/variable.css";
.message {
  color: var(--hds-chatbox-warpper-message-color);
  font-style: normal;
  font-weight: var(--hds-chatbox-warpper-message-font-weight);
  font-size: var(--hds-chatbox-warpper-message-font-size);
  max-width: 100%;
  white-space: pre-line;
  padding: 1rem 0;
}
.loader {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #333;
  margin: 0 3px;
  animation: bounce 1.2s ease-in-out infinite;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
}
.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(0.5em);
    opacity: 0.4;
  }
}
</style>
