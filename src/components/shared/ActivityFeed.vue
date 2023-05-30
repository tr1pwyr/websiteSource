<template>
  <div class="lg:col-start-3">
    <h2 class="text-sm font-semibold leading-6 text-neutral-600">Activity</h2>

    <ul role="list" class="mt-6 space-y-6">
      <li v-for="(activityItem, activityItemIdx) in activity" :key="activityItem.id" class="relative flex gap-x-4">
        <div
          :class="[activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6', 'absolute left-0 top-0 flex w-6 justify-center']">
          <div class="w-px bg-neutral-700/50" />
        </div>
        <template v-if="activityItem.type === 'commented'">
          <img :src="activityItem.person.imageUrl" alt=""
            class="relative mt-3 h-6 w-6 flex-none rounded-full bg-neutral-900" />
          <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-neutral-700">
            <div class="flex justify-between gap-x-4">
              <div class="py-0.5 text-xs leading-5 text-neutral-500">
                <span class="font-medium text-neutral-600">{{ activityItem.person.name }}</span> posted
              </div>
              <time :datetime="activityItem.dateTime" class="flex-none py-0.5 text-xs leading-5 text-neutral-500">
                {{ activityItem.date }}
              </time>
            </div>
            <p class="text-sm leading-6 text-neutral-500">{{ activityItem.comment }}</p>
          </div>
        </template>
        <template v-else>
          <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-neutral-800 rounded-full">
            <CheckCircleIcon v-if="activityItem.type === 'paid'" class="h-6 w-6 text-red-600" aria-hidden="true" />
            <div v-else class="h-1.5 w-1.5 rounded-full bg-neutral-800 ring-1 ring-neutral-600" />
          </div>
          <p class="flex-auto py-0.5 text-xs leading-5 text-neutral-500">
            <span class="font-medium text-neutral-600">{{ activityItem.person.name }}</span> {{ activityItem.type }}
            (github).
          </p>
          <time :datetime="activityItem.dateTime" class="flex-none py-0.5 text-xs leading-5 text-neutral-500">{{
            activityItem.date }}</time>
        </template>
      </li>
    </ul>

    <CommentForm />

  </div>
</template>

<script setup>

import { activity } from '../js/activity.js'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import CommentForm from './CommentForm.vue'
</script>