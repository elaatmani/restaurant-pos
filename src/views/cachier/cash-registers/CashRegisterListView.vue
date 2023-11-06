<template>
    <div class="tw-h-full tw-min-h-[550px]">
      <div class="tw-p-5 tw-bg-gray-50 tw-h-full">
        <div
          class="tw-bg-white tw-p-5 tw-rounded-lg tw-shadow tw-w-full tw-h-full"
        >
          <div class="tw-flex tw-items-center tw-justify-between">
            <h1 class="tw-font-bold tw-text-gray-600">
              La caisse
            </h1>
          </div>
  
          <div class="tw-mt-5">
              <template v-if="cashRegisters.length">
                  <cash-register-table :cash-registers="cashRegisters" />
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
  import CashRegisterTable from "@/components/cachier/cash-registers/CashRegisterTable";
  import useCashRegisterStore from '@/stores/cachier/cashRegisterStore';
  import { storeToRefs } from "pinia";
  
  const store = useCashRegisterStore();
  
  const { cashRegisters } = storeToRefs(store);
  
  
  
  </script>
    
    <style>
  </style>