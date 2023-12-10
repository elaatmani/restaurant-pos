<template>
    <div>
      <ul class="tw-p-2 tw-flex tw-flex-col tw-gap-2">
        <li v-for="i in currentTicket.items" :key="i" class="tw-p-2 tw-bg-white tw-rounded hover:tw-shadow-sm tw-cursor-pointer tw-duration-200 tw-border tw-border-gray-200 tw-flex tw-items-center tw-justify-between">
          <div class="tw-flex tw-items-center tw-gap-2">
            
            <div class="tw-flex tw-flex-col">
              <div class="tw-flex tw-items-center tw-gap-2">
                <span class="tw-text-lg tw-font-bold tw-text-primary-500">{{ i.quantity }} x</span>
                <span class="tw-font-bold">{{ i.menu_item.item_name }}</span>
              </div>
              <span class="tw-text-sm">{{ i.item.menu_name }}</span>
            </div>
          </div>
          <span class="tw-font-bold tw-text-lg">
            {{ (parseFloat(i.menu_item_variation.item_price) * i.quantity).toFixed(2) }}
          </span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import useTicketStore from '@/stores/ticketStore';
import { storeToRefs } from 'pinia';

  
  const { currentTicket } = storeToRefs(useTicketStore());

  

  </script>
  
  <style>
  
  </style>