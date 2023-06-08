<template>
  <div class="lg:col-start-3">
    
    <h2 class="text-sm font-semibold leading-6 text-neutral-500 ml-1">
      The Latest:
    </h2>

    <LatestActivity />
    <CommentForm />

  </div>
</template>

<script setup>
import CommentForm from './activity/CommentForm.vue'
import LatestActivity from './activity/LatestActivity.vue';
</script>