<template>
    <div>
      <swiper
          :space-between="50"
          :grab-cursor="true"
          :auto-height="true"
          :slides-per-view="1"
          @activeIndexChange="handleChange"
      >
          <swiper-slide v-for="i in totalPages" :key="i" class="tw-h-full tw-self-stretch">
              <div  class="tw-w-full tw-overflow-hidden tw-h-full tw-flex-1">
                  <div class="tw-grid tw-grid-cols-3 md:tw-grid-cols-4 lg:tw-grid-cols-5 tw-gap-5">
                      <div v-for="mi in paginateItems(i)" :key="mi.id" >
                          <menu-list-swiper-item @cancel="$emit('cancel')" :menu-item="mi" :menu="menu"  />
                      </div>
                      </div>
              </div>
          </swiper-slide>
      </swiper>
  
      <div v-if="totalPages > 1" class=" tw-mt-6 tw-flex tw-items-center tw-justify-center tw-gap-2">
          <div v-for="i in totalPages" :key="i">
  
              <div 
                  :class="[
                      (i - 1) == active && 'tw-bg-blue-500 tw-scale-150',
                      (i - 1) != active && 'tw-bg-gray-300'
                  ]"
              class="tw-p-1 tw-rounded-full tw-duration-200"></div>
          
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  import 'swiper/css';
  import 'swiper/css/navigation';
  import MenuListSwiperItem from './MenuListSwiperItem.vue';
  
  export default {
      components: {
          Swiper,
          SwiperSlide,
          MenuListSwiperItem
      },
  
      props: {
          menu: {
              required: true,
          },
          items: {
              required: true,
          }
      },
  
      data() {
          return {
              itemsPerPage: 8,
              active: 0
  
          }
      },
  
      computed: {
          totalPages() {
              return Math.ceil(this.items.length / this.itemsPerPage);
          }
      },
  
      methods: {
          paginateItems(pageNumber) {
              // Calculate the start and end index for the current page
              const startIndex = (pageNumber - 1) * this.itemsPerPage;
              const endIndex = startIndex + this.itemsPerPage;
  
              // Slice the array to get the items for the current page
              const pageItems = this.items.slice(startIndex, endIndex);
  
              return pageItems;
          },
  
          handleChange(e) {
              this.active = e.activeIndex
              // console.log(e.activeIndex);
          }
      }
  
  }
  </script>
  
  <style>
  
  </style>