<template>
      <div class="flex flex-1 items-center gap-x-6">
        
        <button type="button" class="-m-3 p-3 md:hidden" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-5 w-5 text-neutral-600" aria-hidden="true" />
        </button>

      <LogoLink />

      </div>

      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-neutral-900 px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-neutral-600/10">
        <div class="-ml-0.5 flex h-16 items-center gap-x-6">
          <button type="button" class="-m-2.5 p-2.5 text-neutral-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIconOutline class="h-6 w-6" aria-hidden="true" />
          </button>
          <div class="-ml-0.5">
            <a href="#" class="-m-1.5 block p-1.5">
              <span class="sr-only">TR1PWYR</span>
              <img class="h-8 w-auto"
                src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/16789da8-89a9-44d5-85e2-bd6001c68a00/public"
                alt="mobileTr1pwyr" />
            </a>
          </div>
        </div>
        <div class="mt-2 space-y-2">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-400 hover:bg-neutral-600">
              {{ item.name }}
          </a>
        </div>
      </DialogPanel>
    </Dialog>

</template>

<script setup>
import { ref } from 'vue'
import { Dialog,  DialogPanel } from '@headlessui/vue'
import LogoLink from './LogoLink.vue'
import { Bars3Icon } from '@heroicons/vue/20/solid'
import { XMarkIcon as XMarkIconOutline } from '@heroicons/vue/24/outline'
import { navigation } from '../js/navigation.js'
const mobileMenuOpen = ref(false)
</script>