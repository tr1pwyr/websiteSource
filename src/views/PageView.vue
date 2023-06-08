<template>
  <section class="bg-neutral-900/80">
    <div v-if="pageRoute == 'help'">
      <HelpPage />
    </div>
    <div v-if="pageRoute == 'about'">
      <AboutPage />
    </div>
    <div v-if="pageRoute == 'resume'" class="ml-5 pt-10">
      <ResumePage />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import AboutPage from "../components/page/AboutPage.vue";
import HelpPage from "../components/page/HelpPage.vue";
import ResumePage from "../components/page/ResumePage.vue";
const route = useRoute();
const pageRoute = route.params.name; 
</script>
