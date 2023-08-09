<template>
  <q-splitter v-model="splitterModel" style="height: 100vh" :limits="limit">
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
import { mapGetters } from "vuex";

/* eslint-disable vue/no-unused-components */

export default {
  computed: {
    ...mapGetters({
      get_expandScreen: "storedata/get_expandScreen",
      get_isVisible: "storedata/get_isVisible",
    }),
  },
  name: "App",
  components: {
    SCMGenAIChatApp,
  },
  data() {
    return {
      splitterModel: ref(97),
      limit: [0, 97],
    };
  },
  watch: {
    get_expandScreen(newval, oldvalue) {
      if (this.get_isVisible) {
        this.splitterModel = ref(this.get_expandScreen ? 0 : 97);
      } else {
        this.splitterModel = ref(97);
      }
    },
    get_isVisible() {
      if (this.get_isVisible) {
        this.limit = [0, 70];
      } else {
        this.limit = [0, 97];
        this.splitterModel = ref(97);
      }
    },
  },
};
</script>

<style scoped></style>
