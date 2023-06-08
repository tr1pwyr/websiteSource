<template>
  <dl class="mx-2 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-5 md:space-y-0 md:px-5">
    <div v-for="f in faq" :key="f.id" >
      <dt class="text-lg font-medium leading-6 text-neutral-700 space-y-2 mb-2">
        {{ f.question }}
      </dt>
      <dd class="text-base text-neutral-500 mb-1">
        {{ f.answer }}
      </dd>
      <dd v-if="f.link" class="text-base text-neutral-500 mb-5">
        <a :href="f.link" class="text-red-500 hover:text-red-400">
          Learn more
        </a>
      </dd>
    </div>
  </dl>
</template>

<script setup>
import { faq } from "../../js/faq.js";
</script>