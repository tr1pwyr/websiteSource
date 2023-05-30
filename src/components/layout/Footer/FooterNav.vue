<template>
  <div class="footerNav md:flex md:items-center md:justify-between">
    <SocialLinks />
    <FooterCopyright />
  </div>
</template>

<script setup>
import FooterCopyright from "./FooterLinks/FooterCopyright.vue";
import SocialLinks from "./FooterLinks/SocialLinks.vue";
</script>

<style scoped>

.footerNav {
  padding: 1.25rem;
  border-top-width: 4px;
  border-color: rgb(38,38,38);
}
</style>