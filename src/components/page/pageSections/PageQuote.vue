<template>
  <blockquote>
    <p>&ldquo;{{ quote }}&rdquo;</p>
    <footer class="mt-3 md:flex md:items-center md:justify-center">
      <div class="md:flex-shrink-0">
        <img class="avatar" 
          :src="image" 
          :alt="alt" />
      </div>
      <div class="quote md:mt-0 md:ml-4 md:flex md:items-center">
        {{ alt }}
      </div>
    </footer>
  </blockquote>
</template>

<script setup>
import { ref } from 'vue'
const alt = ref("Tr1pWyr")
const image = ref("https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/16789da8-89a9-44d5-85e2-bd6001c68a00/public")
const quote = ref("Digital Development, Security, and Operations")
</script>

<style scoped>
.quote {
  margin-top: 0.75rem;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: var(--slate);
}
</style>
