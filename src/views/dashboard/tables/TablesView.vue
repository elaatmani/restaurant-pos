<template>
    <div>
      <div class="tw-bg-gray-100 tw-p-2">
          <div
          class="tw-relative tw-overflow-hidden tw-p-4 tw-bg-white dark:bg-neutral-900 tw-w-full tw-min-h-[calc(100vh-80px)]  dark:tw-shadow-none dark:tw-border dark:border-neutral-800">
          <div class="tw-flex tw-justify-between tw-items-center tw-mb-2">
              <!-- <h1 class="tw-text-lg">Les tables</h1> -->
              <TablesCreate />
              <div class="tw-relative tw-w-full tw-ml-auto tw-mb-4 tw-max-w-[250px]">
                  <div class="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3.5 tw-pointer-events-none">
  
                  <svg class="tw-text-gray-500 dark:tw-text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path fill="#6b7280" fill-rule="evenodd" d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016Z" clip-rule="evenodd"/></svg>
                  </div>
                  <input v-model="search" class="formkit-input tw-bg-gray-50 tw-border tw-border-gray-300 tw-border-solid tw-outline-none tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-pl-10 tw-p-2.5 tw-py-1.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="Chercher..." required="" type="text">
              </div>
            </div>
  
          <div class="tw-mt-3">
              <TablesTable :search="search" :data="tables" :loading="loading"/>
          </div>
      </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Table from '@/api/dashboard/Table';

  import TablesCreate from '@/components/dashboard/tables/TablesCreate';
  import TablesTable from '@/components/dashboard/tables/table/TablesTable';
  import useTableStore from '@/stores/dashboard/tableStore'
  import { ref, computed } from 'vue';
  
  const loading = ref(false);
  const search = ref('');
  const store = useTableStore();
  const tables = computed(() => store.tables);
  
  const getData = async () => {
      loading.value = true;
      await Table.all()
      .then(
          res => {
              if(res.data.status == 200) {
                  store.setTables(res.data.result);
              }
          }
      )
  
      loading.value = false;
  }
  
  getData();
  </script>
  
  <style>
  
  </style>