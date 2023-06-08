<template>
  <div class="w-full">
    <div class="mx-auto max-w-xl rounded-2xl my-10 p-2">
      <Disclosure v-slot="{ open }" v-for="h in help" :key="h.id">
        <DisclosureButton
          class="disclosureButton">
          <span> {{ h.question }} </span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-red-700" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p v-html="h.answer" class="mb-5"> </p>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { help } from "../../js/help.js";
</script>

<style scoped>
.disclosureButton {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: rgb(82,82,82, .25);
  color:rgb(112, 112, 112);
  font-weight: 500;
  text-align: left;
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
}

.disclosureButton:hover {
  background-color: rgb(82,82,82, .1);
  color:rgb(163, 163, 163);
}
</style>
