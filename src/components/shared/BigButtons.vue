<template>
  <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
    <a href="/" class="bigButton primary">
      Go back home
    </a>
    <a href="/page/help" class="bigButton secondary">
      Get Some Help
    </a>
  </div>
</template>

<style scoped>
.bigButton {
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem;
  border-width: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  height: 2.5rem;
}

.secondary {
  color: rgb(156 163 175);
  border: solid rgb(38,38,38);
}
.secondary:hover {
  background-color: var(--red);
  color: #fff;
  border: solid var(--red);
}
.primary {
  color: rgb(156 163 175);
  background-color: var(--red);
  border: solid var(--red);
}
.primary:hover {
  background-color: var(--red);
  color: rgb(255 255 255);
  border: solid var(--red);
}

</style>
