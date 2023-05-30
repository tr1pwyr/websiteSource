<template>
  <header class="sticky inset-x-0 top-0 z-50 flex h-16 border-b-2 border-neutral-700/40 bg-neutral-900">
    <div class="mx-auto flex w-full items-center justify-between pl-2 pr-5">
      
      <MobileMenu />

      <nav class="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 text-neutral-700">
        <a v-for="(item, itemIdx) in navigation" :key="itemIdx" 
          class="text-neutral-300 hover:text-neutral-100"
          :href="item.href">{{ item.name }}
        </a>
      </nav>

      <div class="flex flex-1 items-center justify-end gap-x-8">
        <button type="button" class="-m-2.5 p-2.5 text-neutral-400 hover:text-neutral-500">
          <span class="sr-only">View notifications</span>
          <BellIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your profile</span>
          <img class="h-8 w-8 rounded-full"
            src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/16789da8-89a9-44d5-85e2-bd6001c68a00/public"
            alt="tr1pwyr" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import MobileMenu from '../shared/MobileMenu.vue'
import { BellIcon } from '@heroicons/vue/24/outline'
import { navigation } from '../js/navigation.js'
</script>
