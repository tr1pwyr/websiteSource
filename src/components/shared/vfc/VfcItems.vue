<template>
  <section class="ml-2 border-b-2 pb-5 border-neutral-600/30">
    <div class="mt-4 flex w-full flex-none gap-x-4 border-t border-neutral-600/5 pt-2">
      <dt class="flex-none">
        <span class="sr-only">Skills and Availability</span>
        <CodeBracketIcon class="h-6 w-5 text-neutral-400" aria-hidden="true" />
      </dt>
      <dd class="text-sm font-medium leading-6 text-neutral-600">Node / JS / Python</dd>
    </div>
    <div class="mt-4 flex w-full flex-none gap-x-4">
      <dt class="flex-none">
        <span class="sr-only">Due date</span>
        <CalendarDaysIcon class="h-6 w-5 text-neutral-400" aria-hidden="true" />
      </dt>
      <dd class="text-sm leading-6 text-neutral-500">
        <time datetime="2023-01-31">Available: June 1st</time>
      </dd>
    </div>
    <div class="mt-4 flex w-full flex-none gap-x-4">
      <dt class="flex-none">
        <span class="sr-only">Status</span>
        <CreditCardIcon class="h-6 w-5 text-neutral-400" aria-hidden="true" />
      </dt>
      <dd class="text-sm leading-6 text-neutral-500">BTC / Stripe</dd>
    </div>
  </section>
</template>

<script setup>
import {
  CalendarDaysIcon,
  CreditCardIcon,
  CodeBracketIcon
} from '@heroicons/vue/20/solid'
</script>