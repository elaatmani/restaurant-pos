<template>
    <div class="tw-border-b">
      
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
            <span class="tw-text-lg tw-leading-4 tw-font-bold">M. Yassine</span>
          </div>
        </button>

        <router-link :to="{name: 'cachier.index'}" class="tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-rounded-md tw-p-2">
            <icon class="tw-text-xl" icon="icon-park-outline:return" />
        </router-link>
      </div>
  
      <div class="tw-w-full tw-bg-green-600 tw-py-1">
          <p class="tw-text-xs tw-text-white tw-text-center">Caisse ouverte le: Mercredi 16 Août 2023 à 10:59</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  </style>