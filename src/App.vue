<template>
  <page />
</template>

<script lang="ts">
import { collection, getDocs } from "firebase/firestore";
import Page from "./views/Page.vue";
import db from "./back/init";
export default {
  components: {
    Page,
  },
  // async mounted() {
  //   const querySnapshot = await getDocs(collection(db, "boards"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data().title}`);
  //   });
  // },
};
</script>

<style lang="scss"></style>
