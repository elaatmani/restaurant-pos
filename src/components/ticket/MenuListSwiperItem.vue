<template>
    <div>
          <button @click="visible = true" class="lg:tw-p-5 md:tw-p-3 tw-relative tw-p-1 tw-w-full tw-rounded-lg tw-aspect-square hover:tw-shadow tw-duration-200 tw-bg-gray-100 tw-overflow-hidden tw-font-bold lg:tw-text-xl md:tw-text-lg tw-text-sm">
              <span>{{ menuItem.name }}</span>
              <div class="tw-absolute tw-top-0 tw-right-0 tw-font-bold tw-text-sm tw-bg-emerald-500 tw-text-white tw-px-1 tw-rounded-bl tw-ml-auto">{{ menuItem.price }} MAD</div>
          </button>
          <div class="tw-px-3 tw-w-full tw-flex tw-justify-center tw-flex-wrap tw-mt-1">
              <span>{{ menuItem.name }}</span>
          </div>
          <MenuListItemAdd @cancel="$emit('cancel')" v-model:visible="visible" :item="item" :menu-item="menuItem" />
      </div>
  </template>
  
  <script>
  import MenuListItemAdd from './MenuListItemAdd.vue';
  
  export default {
      components: {
          MenuListItemAdd,
      },
  
      props: {
          item: {
              required: true
          },
          menuItem: {
              required: true
          }
      },
  
      data() {
          return {
              visible: false
          }
      },
  
      methods: {
      }
  
  }
  </script>
  
  <style>
  
  </style>