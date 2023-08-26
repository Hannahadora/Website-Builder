<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
import { useStructureStore } from "@/stores/structure";
import { onMounted, ref } from "vue";

export default {
  components: {
    quillEditor,
  },

  setup() {
    const textStore = useStructureStore();
    const editorOption = ref({
      placeholder: "Compose an epic...",
      theme: "snow",
    });

    onMounted(() => {
      console.log("this is current quill instance object");
    });

    console.log("store", textStore);
    const onEditorChange = (event) => {
      console.log("onEditorChange");
    };

    return { editorOption, onEditorChange, textStore };
  },
};
</script>
<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <textarea
    rows="5"
    class="quill-editor w-full"
    v-model="textStore.content"
    v-quill:myQuillEditor="editorOption"
  />

  <!-- Or manually control the data synchronization（手动控制数据流）  -->
  <div
    class="quill-editor"
    :content="content"
    @change="onEditorChange($event)"
    v-quill:myQuillEditor="editorOption"
  ></div>
</template>
