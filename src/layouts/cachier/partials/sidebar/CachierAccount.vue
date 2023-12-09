<template>
  <div class="tw-border-b">
    
    <div class="tw-p-3 ">
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
    </div>

    <div class="tw-w-full tw-bg-green-600 tw-py-1">
        <p v-if="!!currentCashRegister" class="tw-text-xs tw-text-white tw-text-center">Caisse ouverte le: {{ formattedDate }}</p>
        <icon v-else icon="line-md:loading-twotone-loop" class="tw-mx-auto tw-text-center  tw-text-white tw-text-lg" />
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