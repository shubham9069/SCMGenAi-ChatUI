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
      <SCMChatApp
        :userDetails="userDetails"
        @splitter="(value) => console.log(value)"
      />
    </template>
  </q-splitter>

  <div />
</template>

<script>
import { SCMChatApp } from "SCM-UI-library";
import { ref } from "vue";
import { markRaw } from "vue";

/* eslint-disable vue/no-unused-components */
export default {
  name: "App",
  components: {
    SCMChatApp,
  },
  setup() {
    return {
      splitterModel: ref(30), // start at 50%
    };
  },
  data() {
    return {
      userDetails: {
        name: "shubham",
        image: "./assets/icons/user.jpg",
      },
    };
  },
  methods: {},
};
</script>

<style scoped></style>
