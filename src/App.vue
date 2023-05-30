<template>
  <div class="contain">
    <main>
      <Header />
      <router-view :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/layout/TheHeader.vue";
import Footer from "./components/layout/TheFooter.vue";
</script>

<style scoped>
.contain {
  min-height: 100%;
  flex: 1 1 0%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: 64rem;
  margin-top: .25rem;
}
</style>
