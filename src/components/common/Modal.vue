<template lang="html">
  <div v-if="show" class="modal-window">
    <div class="position-fixed top-50 start-50 translate-middle p-3">
      <div
        class="title container d-flex justify-content-between align-items-center mb-1"
      >
        <h3>{{ title }}</h3>
        <i @click="close" class="fa-solid fa-xmark"></i>
      </div>
      <div class="content p-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "modal-component",
  props: {
    title: String,
    showModal: Boolean,
  },
  data(): { show: boolean } {
    return {
      show: this.showModal,
    };
  },
  methods: {
    close(): void {
      this.show = false;
    },
  },
  updated() {
    console.log(this.showModal);
  },
};
</script>
<style scoped lang="css">
.modal-window {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.24);
  left: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
.modal-window > div {
  border-radius: 25px;
  background: #fff;
  min-width: 30%;
}

.title i {
  font-size: 35px;
  cursor: pointer;
}

.title i:hover {
  color: rgba(39, 45, 107);
}

.title h3 {
  color: rgba(39, 45, 107);
}
</style>
