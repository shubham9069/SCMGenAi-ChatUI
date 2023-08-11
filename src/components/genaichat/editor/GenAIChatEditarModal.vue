<template>
  <q-card class="modal-container modal" flat>
    <div class="modal-header">
      <p class="">Editor</p>
      <q-icon class="material-icons icon-size" @click="closeEditorModal">
        close
      </q-icon>
    </div>

    <q-card-section class="model-text-area">
      <q-editor
        dense
        v-model="editorText"
        :definitions="{
          bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
        }"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      get_editorMessage: "storedata/get_editorMessage",
      get_isVisible: "storedata/get_isVisible",
    }),
  },
  name: "GenAIChatEditarModal",
  props: {},
  data() {
    return {
      editorText: "",
    };
  },
  methods: {
    closeEditorModal() {
      if (this.get_isVisible) {
        this.$store.dispatch("storedata/editor", false);
      }
    },
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
  watch: {
    get_editorMessage() {
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
  },
};
</script>

<style>
.modal-header {
  background: #f0f4f8;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 20px;
  border: var(--hds-sidebar-border);
}
.modal-header > p {
  font-size: 18px;
  margin: 0;
  cursor: pointer;
  font-weight: 600;
}
.modal-container {
  position: absolute;

  width: 100%;
  min-width: 400px;
  right: 100%;
  height: 80%;
}
.model-text-area {
  padding: 10px 10px;
  height: 100%;
  background: var(--hds-chatbox-background);
}
.q-editor {
  height: 100%;
}
.q-editor__content {
  background: white;
  height: 90%;
}
</style>
