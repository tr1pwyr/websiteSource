<template>
  <section class="lg:col-start-3 lg:row-end-1">
    <h2 class="sr-only">Virtual Contact File</h2>
    <div class="flex justify-center">
      <img class="block lg:hidden h-32 w-32 mr-1 mb-3 rounded-full"
        src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/16789da8-89a9-44d5-85e2-bd6001c68a00/public"
        alt="tr1pwyr" />
    </div>
    <div class="rounded-lg bg-neutral-900/50 shadow-sm ring-2 ring-neutral-700/0 flex justify-center">
      <dl>
        <VfcStatus />
        <VfcItems />
        <a href="/page/resume" class="block py-5 pl-2 text-sm font-bold leading-6 text-neutral-500">
          More Info <span aria-hidden="true">&rarr;</span>
        </a>
      </dl>
    </div>
  </section>
</template>

<script setup>
import VfcStatus from './vfc/VfcStatus.vue';
import VfcItems from './vfc/VfcItems.vue';
</script>
