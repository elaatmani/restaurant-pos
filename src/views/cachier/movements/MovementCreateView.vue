<template>
  <div class="tw-h-full tw-min-h-[550px]">
    <div class="tw-p-5 tw-bg-gray-50 tw-h-full">
      <div class="tw-bg-white tw-p-5 tw-rounded-lg tw-shadow tw-w-full tw-h-full">
        <div class="tw-flex tw-items-center tw-justify-between">
          <h1 class="tw-font-bold tw-text-gray-600">
            Ajouter une mouvements d'argents
          </h1>
        </div>

        <div class="tw-mt-5">

          

          <button
            type="button"
            @click="create"
            class="tw-border-solid tw-text-white tw-bg-primary-600 hover:tw-bg-primary-700 tw-duration-200 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-md tw-text-sm tw-px-5 tw-py-2 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800"
          >
            Ajouter
          </button>

        </div>
      </div>
    </div>
  </div>
</template>
    
<script setup>
import useMovementStore from '@/stores/movementStore';

const store = useMovementStore();

const create = () => {
  store.addMovement({});
}


</script>
    
<style></style>