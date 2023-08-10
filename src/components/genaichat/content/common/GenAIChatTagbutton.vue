<template>
  <span class="tag-button" :style="buttonProps"
    ><img :src="buttonDetails.Icon" />
    {{ buttonDetails.Text }}
  </span>
</template>

<script>
export default {
  name: "GenAIChatTagbutton",
  props: {
    buttonDetails: {
      type: Object,
      required: false,
      default: () => {
        return { background: "#e6f7ff", color: "#005ac2" };
      },
    },
    buttonProps: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.tag-button {
  padding: var(--hds-chatbox-TagButton-padding);
  font-weight: var(--hds-chatbox-TagButton-font-weight);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--hds-chatbox-TagButton-gap);
  width: max-content;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 27px;
}

.tag-button img {
  width: var(--hds-chatbox-TagButton-img-width) !important;
}
</style>
