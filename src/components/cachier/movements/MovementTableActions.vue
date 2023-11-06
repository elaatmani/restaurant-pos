<template>
  <div class="tw-flex tw-items-center tw-gap-2 tw-w-full tw-justify-end">
    <button class="tw-p-1 tw-border tw-border-solid tw-border-blue-300 tw-rounded-md tw-bg-white hover:tw-bg-blue-50 tw-duration-200">
        <icon class="tw-text-xl tw-text-blue-400" icon="basil:image-solid" />
    </button>
    <button class="tw-p-1 tw-border tw-border-solid tw-border-green-300 tw-rounded-md tw-bg-white hover:tw-bg-green-50 tw-duration-200">
        <icon class="tw-text-xl tw-text-green-400" icon="ion:eye" />
    </button>
  </div>
</template>

<script setup>
import useMovementStore from '@/stores/cachier/movementStore.js';

useMovementStore();
</script>

<style>

</style>