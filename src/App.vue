<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref, onMounted } from "vue";

import stars from "@/scripts/bg.js";

const bg = ref();

onMounted(() => {
  stars.create(bg.value);
});
</script>

<template>
  <div id="bg" ref="bg"></div>

  <RouterView />
</template>

<style src="@/styles/bg.css" />
<style></style>
