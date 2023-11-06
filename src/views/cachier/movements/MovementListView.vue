<template>
  <div class="tw-h-full tw-min-h-[550px]">
    <div class="tw-p-5 tw-bg-gray-50 tw-h-full">
      <div
        class="tw-bg-white tw-p-5 tw-rounded-lg tw-shadow tw-w-full tw-h-full"
      >
        <div class="tw-flex tw-items-center tw-justify-between">
          <h1 class="tw-font-bold tw-text-gray-600">
            Liste Mouvements D'argents
          </h1>

          <router-link
            :to="{ name: 'cachier.movements.create' }"
            class="tw-border-solid tw-text-white tw-bg-primary-600 hover:tw-bg-primary-700 tw-duration-200 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-md tw-text-sm tw-px-5 tw-py-2 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800"
          >
            Ajouter
          </router-link>
        </div>

        <div class="tw-mt-5">
            <template v-if="movements.length">
                <movements-table :movements="movements" />
            </template>
            <template v-else>
                <div class="tw-p-16 tw-col-span-12 tw-bg-gray-50 tw-rounded-md">
                    <p class="tw-text-center tw-text-lg tw-text-gray-600 tw-font-semibold">Pas de Mouvements</p>
                </div>
            </template>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import MovementsTable from "@/components/cachier/movements/MovementsTable";
import useMovementStore from '@/stores/cachier/movementStore';
import { storeToRefs } from "pinia";

const store = useMovementStore();

const { movements } = storeToRefs(store);



</script>
  
  <style>
</style>