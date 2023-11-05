<template>
    <div>
      <popup :visible="visible" :closeable="false" @cancel="$emit('update:visible', false)">
          <div
              class="tw-p-5 tw-relative tw-mx-auto tw-w-[95%] md:tw-max-w-[800px]  dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid tw-rounded-tr-none dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
          >
              <button @click="$emit('update:visible', false)" class="tw-absolute tw-top-0 tw-right-0 tw-rounded-t-lg tw-text-sm tw-px-2  tw-bg-red-500 tw-text-white -tw-translate-y-full">
                  <icon icon="mdi:close" class="tw-text-xl" />
              </button>
  
              <menu-list-swiper @cancel="$emit('update:visible', false)" :items="item.menu_items" :item="item" />
          </div>
      </popup>
    </div>
  </template>
  
  <script>
  import MenuListSwiper from './MenuListSwiper.vue'
  export default {
    components: { MenuListSwiper },
      props: {
          visible: {
              required: true,
          },
  
          item: {
              required: true
          }
      }
  }
  </script>
  
  <style>
  
  </style>