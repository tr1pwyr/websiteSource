<template>
  <div class="mt-12 md:mt-0 footerWrapper">
    <h4 class="">Projects:</h4>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in users" :key="item.name">
        <a :href="item.href" class="footerItem">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
 const users = [
    { name: "Headlin3s", href: "https://headlin3s.com" },
    { name: "wLog.app", href: "https://wlog.app" },
    { name: "Tweet Data", href: "https://github.com/tr1pwyr/tweetData" },
    { name: "Front-end", href: "https://front-end.us" },
  ]
</script>