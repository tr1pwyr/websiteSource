<template>
  <div class="mt-6 flex gap-x-3">
    <img 
      src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/16789da8-89a9-44d5-85e2-bd6001c68a00/public" 
      alt="Tr1pWyr"
      class="h-6 w-6 flex-none rounded-full bg-neutral-50" />
    <form action="https://formsubmit.co/e92821a1dd52d6a49a49a93a4c5b11f2" method="POST" class="relative flex-auto">
      <input type="hidden" name="_next" value="https://wlog.app">
      <div
        class="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-neutral-700 focus-within:ring-2 focus-within:ring-red-900/90">
        <label for="comment" class="sr-only">Say Hey</label>
        <textarea rows="2" name="helloFromTr1pwyr" id="comment"
          class="block w-full resize-none border-0 bg-transparent py-1.5 text-neutral-600 placeholder:text-neutral-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="mssg me" />
      </div>

      <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
        <div class="flex items-center space-x-5">

          <div class="flex items-center">
            <Listbox as="div" v-model="selected">
              <ListboxLabel class="sr-only">Your mood</ListboxLabel>
              <div class="relative">
                <ListboxButton
                  class="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-neutral-400 hover:text-neutral-500">
                  <span class="flex items-center justify-center">
                    <span v-if="selected.value === null">
                      <FaceSmileIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <span class="sr-only">Add your mood</span>
                    </span>
                    <span v-if="!(selected.value === null)">
                      <span :class="[selected.bgColor, 'flex h-8 w-8 items-center justify-center rounded-full']">
                        <component :is="selected.icon" class="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                      </span>
                      <span class="sr-only">{{ selected.name }}</span>
                    </span>
                  </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
                  <ListboxOptions
                    class="absolute z-10 -ml-6 mt-1 w-48 rounded-lg bg-neutral-800 py-3 text-neutral-500 ring-1 ring-inset ring-neutral-700 focus:outline-none sm:ml-auto sm:w-42 sm:text-sm">
                    <ListboxOption as="template" v-for="mood in moods" :key="mood.value" :value="mood"
                      v-slot="{ active }">
                      <li
                        :class="[active ? 'bg-neutral-900' : 'bg-neutral-800', 'relative cursor-default select-none px-3 py-2']">
                        <div class="flex items-center">
                          <div :class="[mood.bgColor, 'flex h-6 w-6 items-center justify-center rounded-full']">
                            <component :is="mood.icon" :class="[mood.iconColor, 'h-4 w-4 flex-shrink-0']"
                              aria-hidden="true" />
                          </div>
                          <span class="ml-3 block truncate font-medium">{{ mood.name }}</span>
                        </div>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>
        </div>
        <button type="submit"
          class="rounded-md bg-neutral-900 px-2 py-1.5 text-xs font-semibold text-neutral-600 ring-1 ring-inset ring-neutral-700/50 hover:bg-black">
          Send It
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

import {
  CalendarIcon,
  FaceSmileIcon,
  CloudIcon,
  FireIcon,
  CodeBracketIcon,
  HeartIcon,
  XMarkIcon as XMarkIconMini,
} from '@heroicons/vue/20/solid'

const moods = [
  { name: 'LFG', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Kudos', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-red-600' },
  { name: 'Ops', value: 'happy', icon: CloudIcon, iconColor: 'text-white', bgColor: 'bg-red-400' },
  { name: 'Book', value: 'sad', icon: CalendarIcon, iconColor: 'text-white', bgColor: 'bg-red-700' },
  { name: 'Dev', value: 'thumbsy', icon: CodeBracketIcon, iconColor: 'text-white', bgColor: 'bg-red-400' },
  { name: "Nope", value: null, icon: XMarkIconMini, iconColor: 'text-neutral-400', bgColor: 'bg-transparent' },
]

const comment = ref(null)

const selected = ref(moods[5])

const handleSubmit = () => {
  if (comment.value=='' || !comment.value || comment.value==null ) {
    Swal.fire({
      title: 'Oops...',
      text: 'You forgot to say something!',
      icon: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: "#000",
    })
  } else {
    Swal.fire({
    title: "Thanks for the feedback!",
    text: "I'll get back to you as soon as possible.",
    confirmButtonText: "Ok",
    confirmButtonColor: "#000",
  });
  } 
};

</script>

<style>
.swal2-modal {
  background-color: rgba(82,82,82, 0.1);
  border: 1px solid #4b5563;
  color: #f9fafb;
}
</style>