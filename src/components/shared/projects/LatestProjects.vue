<template>
  <section class="sm:mx-0 sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2 pb-10">
    <IdentityHeader />
    <ProjectsLoop />
    <LatestLs />
  </section>
</template>

<script setup>
import IdentityHeader from './IdentityHeader.vue';
import ProjectsLoop from './ProjectsLoop.vue';
import LatestLs from './LatestLs.vue';
</script>

