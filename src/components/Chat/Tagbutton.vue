<template>
  <span class="tag-button"
    ><img :src="buttonDetails.Icon" />
    {{ buttonDetails.Text }}
  </span>
</template>

<script>
export default {
  name: "TagButton",

  data() {
    return {};
  },
  props: {
    buttonDetails: Object,
  },
};
</script>

<style>
@import "../../css/variable.css";
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
}

.tag-button img {
  width: var(--hds-chatbox-TagButton-img-width) !important;
}
</style>
