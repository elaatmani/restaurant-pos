<template>
    <v-app-bar
      dir="rtl"
      class="tw-top-0 !tw-fixed tw-overflow-visible !tw-border-b"
      elevation="0"
    >
      <div class="tw-flex tw-justify-between tw-w-full tw-px-3">
        <div>
          <button
          @click="isActive = !isActive"
          ref="container"
          class="tw-bg-white tw-border-gray-200 tw-p-1.5 tw-border  tw-border-solid tw-rounded-lg hover:tw-bg-gray-50 hover:tw-shadxow-md hover:tw-shadow-neutral-200 tw-duration-200"
      >
          <icon
          class="tw-text-2xl tw-text-neutral-600 tw-duration-200"
          icon="solar:hamburger-menu-broken"
          />
      </button>
        </div>
  
        <div class="tw-flex tw-items-center tw-gap-2">
  
          <UserMenu />
        </div>
      </div>
    </v-app-bar>
  </template>
  
  <script setup>
  import UserMenu from "./header/UserMenu.vue";
  import { defineProps, defineEmits, computed } from "vue";
  
  const emit = defineEmits(["update:drawer"]);
  const props = defineProps({
    drawer: {
      required: true,
    },
  });
  
  const isActive = computed({
    get: () => props.drawer,
    set: (v) => emit("update:drawer", v),
  });
  </script>
  
  <style>
  </style>