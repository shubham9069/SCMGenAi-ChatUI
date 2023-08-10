<template>
  <q-card class="modal-container">
    <q-card-section class="modal-header">
      <div class="text-h6">Editor</div>
      <q-icon class="material-icons icon-size" v-close-popup> close </q-icon>
    </q-card-section>

    <q-card-section class="model-text-area">
      <q-editor
        v-model="editorText"
        :definitions="{
          bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
        }"
      />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="OK" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      get_editorMessage: "storedata/get_editorMessage",
    }),
  },
  name: "GenAIChatEditarModal",
  props: {},
  data() {
    return {
      editorText: "",
    };
  },

  mounted() {
    if (this.get_editorMessage.chart) {
      const chartContainer = document.querySelector(
        `#chart${this.get_editorMessage?.id} svg`
      );

      const chartSVG = new XMLSerializer().serializeToString(chartContainer);
      const dataURI =
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(chartSVG);
      console.log(dataURI);
      this.editorText = `<img src=${dataURI} />`;
    } else {
      this.editorText = this.get_editorMessage?.text || "no msg found";
    }
  },
};
</script>

<style>
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f0f4f8;
}
.modal-container {
  border-radius: 12px !important;
}
.model-text-area {
  padding: 10px 10px;
}
.q-dialog .q-card {
  width: 50%;
}
</style>
