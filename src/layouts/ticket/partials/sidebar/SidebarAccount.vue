<template>
    <div class="tw-border-b tw-border-gray-200">
      
      <div class="tw-p-3 tw-flex tw-items-center tw-justify-between">
        <button class="tw-flex tw-items-center tw-gap-2">
          <img
            class="tw-w-10 tw-h-10 tw-rounded"
            :src="$frontend('assets/images/avatar.jpg')"
            alt="Default avatar"
          />
          <div
            class="tw-flex tw-justify-center tw-h-full tw-flex-col tw-text-start"
          >
            <span>Bonjour,</span>
            <span class="tw-text-lg tw-leading-4 tw-font-bold">{{ authStore.user.name }}</span>
          </div>
        </button>

        <router-link :to="{name: 'cachier.index'}" class="tw-flex tw-items-center tw-border-gray-200 tw-justify-center tw-border tw-border-solid tw-rounded-md tw-p-2">
            <icon class="tw-text-xl" icon="icon-park-outline:return" />
        </router-link>
      </div>
  
      <div v-if="!!currentCashRegister" class="tw-w-full tw-bg-green-600 tw-py-1">
          <p class="tw-text-xs tw-text-white tw-text-center">Caisse ouverte le: {{ formattedDate }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import useAuthStore from '@/stores/authStore';
  import moment from 'moment';
  import { computed } from 'vue';

  const authStore = useAuthStore();
  const currentCashRegister = computed(() => authStore.currentCashRegister);
  const formattedDate = computed(() => moment(currentCashRegister.value.created_at).locale('fr').format('dddd DD MMMM YYYY [à] HH:mm'))
  </script>
  
  <style>
  </style>