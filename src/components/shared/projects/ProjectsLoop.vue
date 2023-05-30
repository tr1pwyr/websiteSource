<template>
  <table class="mt-5 w-full whitespace-nowrap text-left text-sm leading-6">
    <thead class="border-b-4 border-neutral-800 text-neutral-600">
      <tr class="font-semibold">
        <th scope="col" class="px-0 py-3">Latest Projects</th>
        <th scope="col" class="hidden py-3 pl-8 pr-0 text-right sm:table-cell">Tech</th>
        <th scope="col" class="py-3 pl-8 pr-0 text-right">Category</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data.items" :key="item.id" class="border-b-4 border-neutral-800">
        <td class="px-0 py-5 align-top">
          <div class="truncate font-medium text-neutral-600">
            <a :href="item.details" class="text-neutral-300 hover:text-white">
              {{ item.title }}
            </a>
          </div>
          <div class="truncate text-neutral-500">
            {{ item.description }}
          </div>
        </td>
        <td class="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-neutral-600 sm:table-cell">
          {{ item.tech }}
        </td>
        <td class="py-5 pl-8 pr-0 text-right align-top tabular-nums text-neutral-600">
          {{ item.category }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { data } from '../../js/data.js'
</script>

