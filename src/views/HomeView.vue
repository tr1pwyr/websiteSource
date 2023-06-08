<template>
  <main>
    <div
      class="p-5 pr-4 bg-neutral-900/75 mx-auto grid grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <VfCard />
      <LatestProjects />
      <ActivityFeed />
    </div>
  </main>
</template>

<script setup>
import LatestProjects from '../components/shared/projects/LatestProjects.vue'
import VfCard from '../components/shared/VfCard.vue'
import ActivityFeed from '../components/shared/ActivityFeed.vue'
</script>