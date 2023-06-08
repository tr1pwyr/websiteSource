<template>
  <div class="hidden sm:block">

    <div id="tres" class="">
      <div class="mx-3">
        <h5 class="font-semibold text-sm text-neutral-100 mb-2">Listening:</h5>
        <a href="https://www.youtube.com/watch?v=gLDmE7zsQew">
          <img src="desire.webp" alt="desire" class="w-64 rounded-md thumbnail" />
        </a>

      </div>

      <div class="mr-3 mx-3 ">
        <h5 class="font-semibold text-sm text-neutral-100 mb-2">Learning:</h5>
        <a href="https://www.modular.com/mojo">
          <img src="mojo.webp" alt="mojo" class="w-64 rounded-md thumbnail" />
        </a>
      </div>

      <div class="mx-3">
        <h5 class="font-semibold text-neutral-100 mb-2">Launching:</h5>
        <a href="https://wlog.app">
          <img src="wl.webp" alt="wlog" class="w-64 rounded-md thumbnail" />
        </a>
      </div>
    </div>

  </div>
</template>

<style scoped>
#tres {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
}

.thumbnail {
  opacity: 0.5;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
}

.thumbnail:hover {
  opacity: 1;
}

.disclosureButton {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: rgb(82, 82, 82, .25);
  color: rgb(112, 112, 112);
  font-weight: 500;
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
}

.disclosureButton:hover {
  background-color: rgb(82, 82, 82, .1);
  color: rgb(163, 163, 163);
}</style>