<template>
  <div>
    <button @click="visible = true" class="tw-p-2 tw-px-4 tw-rounded-md tw-border tw-border-solid tw-flex tw-items-center tw-gap-2">
        <icon class="tw-text-lg" icon="fluent:filter-16-filled" />
        <span class="tw-text-sm tw-font-semibold">Filter</span>
    </button>
    
    <popup :visible="visible" @cancel="visible = false">
        <div class="tw-max-w-[450px] tw-w-full tw-bg-white tw-rounded-md tw-p-5 tw-mx-auto tw-border tw-border-solid tw-border-gray-400">
            <div class="tw-flex tw-items-center tw-gap-2">
                <icon class="tw-text-lg" icon="fluent:filter-16-filled" />
                <h1 class="tw-font-bold tw-text-gray-600">Filters</h1>
            </div>

            <div class="tw-flex tw-flex-col tw-min-h-[300px] tw-mt-5">
              
              <div class="tw-w-full">
                <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Type de ticket</label>
              
                <select v-model="type" class="tw-bg-gray-50 tw-border tw-outline-none tw-border-solid tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500">
                  <option value="all" selected>Tous</option>
                  <option :value="1">Reservation</option>
                  <option :value="2">En livraison</option>
                  <option :value="3">A emporter</option>
                </select>
              </div>
              
              <div class="tw-flex-1"></div>

              <div class="tw-w-full tw-flex tw-justify-end tw-items-center tw-gap-5">
                <button @click="visible = false" type="button" class="tw-border-solid tw-duration-200 tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-gray-800 dark:tw-text-white dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700"
                >Annuler</button>

                <button @click="handleFilter" type="button" class="tw-border-solid tw-text-white tw-bg-primary-600 hover:tw-bg-primary-700 tw-duration-200 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-md tw-text-sm tw-px-5 tw-py-2.5  dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800"
                >Filtrer</button>
              </div>
            </div>
        </div>
    </popup>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";

const props = defineProps(['filters'])
const emit = defineEmits(['update:filters'])

const visible = ref(false);
const type = ref(1);

const handleFilter = () => {
  emit('update:filters', {...props.filters, type: type.value});
  visible.value = false;
}

</script>

<style>

</style>