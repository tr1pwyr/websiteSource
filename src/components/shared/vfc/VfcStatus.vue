<template>
  
  <div class="flex-auto pt-5">
    <dt class="sr-only">VCF:</dt>
    <dd class="text-2xl lg:text-base font-semibold leading-6 ">
      <a class="text-neutral-500" 
        href="mailto:tr1p@tr1pwyr.com">
        tr1p@tr1pwyr.com
      </a>
    </dd>
    <dd class="lg:-mt-1 mb-2">
      <a class="font-semibold text-neutral-400 leading-6 text-lg lg:text-xs" 
        href="tel:+18502703180">
        1.850.270.3180
      </a>
    </dd>
  </div>

  <div class="pt-2 w-64">
    <dt class="sr-only">Status</dt>
    <dd class="status">
      Status:&nbsp; <span class="pink">
        Available 5.5.2023
      </span>
    </dd>
  </div>

</template>

<style scoped>
  .status {
    background-color: rgb(23 23 23);
    max-width: 24rem;
    border-radius: 0.375rem;
    display: flex;
    margin-top: 0.5rem;
    text-align: center;
    justify-content: center;
    padding-left: 0.5rem/* 8px */;
    padding-right: 0.5rem/* 8px */;
    padding-top: 0.5rem/* 6px */;
    padding-bottom: 0.375rem/* 6px */;
    font-size: .8rem;
    line-height: 1rem;
    font-weight: 600;
    color: #b65d50;
  }
  .pink {
    color: #f2f2f2;
  }
</style>
