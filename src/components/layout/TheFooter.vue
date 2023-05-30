<template>
  <footer id="footer">
    <h2 class="sr-only">Footer</h2>
    <div class="footerContain">
      <FooterLinks />
      <FooterNav />
    </div>
  </footer>
</template>

<script setup>
import FooterNav from "./Footer/FooterNav.vue";
import FooterLinks from "./Footer/FooterLinks.vue";
</script>

<style scoped>
#footer {
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
  margin-top: .1rem;
}
.footerContain {
  padding-top: 2.5rem;
  background-color: rgb(23 23 23 / 0.6);
}
</style>