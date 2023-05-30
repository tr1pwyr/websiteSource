<template>
  <p class="mt-8 text-sm text-neutral-500 md:mt-0 md:order-1 py-2">
    &copy; {{ info.year }}
    <a class="primaryText" :href="info.link">
      {{ info.name }}
    </a> - Some rights reserved. &nbsp; Version {{ info.version }}
  </p>
</template>

<script setup>
import { ref } from "vue";
const info = ref({
  version: "0.0.1",
  name: "tr1pwyr",
  link: "https://tr1pwyr.com/",
  year: new Date().getFullYear(),
});
</script>