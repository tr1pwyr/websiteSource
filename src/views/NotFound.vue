<template>
  <div class="py-20 px-5 grid place-items-center bg-neutral-900/80">
    <main class="mx-auto max-w-max sm:flex">
      <p class="responseCode"> 404 </p>
      <div class="ml-5">
        <ContentHeader :content = "content" />
        <BigButtons  />
      </div>
    </main>
  </div>
</template>

<script setup>
import BigButtons from "../components/shared/BigButtons.vue";
import ContentHeader from "../components/shared/ContentHeader.vue";

const content =
  {
    heading: "Page not found",
    subHeading: "Please check the URL in the address bar and try again.",
  };
</script>

<style scoped>

.responseCode {
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--red);
}

</style>