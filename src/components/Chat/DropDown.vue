<template>
  <ul
    class="dropdown-menu post-dropdown"
    :style="{ display: `${DropDown_Toggle ? 'Block' : 'none'}` }"
  >
    <li v-for="element in List" :key="element">
      <p>{{ element }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DropDown",
  props: ["DropDown_Toggle", "List"],
};
</script>

<style scoped></style>
