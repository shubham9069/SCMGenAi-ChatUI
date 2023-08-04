<template>
  <q-splitter
    v-model="splitterModel"
    style="height: 100vh"
    :limits="[30, 100]"
    reverse
  >
    <template v-slot:before>
      <div class="q-pa-md">
        <div class="text-h4 q-mb-md">Before</div>
        <div v-for="n in 20" :key="n" class="q-my-md">
          {{ n }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quis praesentium cumque magnam odio iure quidem, quod illum numquam
          possimus obcaecati commodi minima assumenda consectetur culpa fuga
          nulla ullam. In, libero.
        </div>
      </div>
    </template>

    <template v-slot:after>
      <SCMGenAIChatApp />
    </template>
  </q-splitter>

  <div />
</template>

<script>
import { SCMGenAIChatApp } from "scm-ui";

import { ref } from "vue";

/* eslint-disable vue/no-unused-components */

export default {
  name: "App",
  components: {
    SCMGenAIChatApp,
  },
  setup() {
    return {
      splitterModel: ref(30),
    };
  },
};
</script>

<style scoped></style>
