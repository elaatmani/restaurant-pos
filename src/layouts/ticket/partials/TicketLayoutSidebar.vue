<template>
    <v-navigation-drawer 
      :permanent="true"
      :rail="false"
      location="left"
      :absolute="false"
      class="!tw-top-0 !tw-fixed"
      :touchless="true"
      width="350">

      <div class="tw-pb-16">
        <sidebar-account />
        <ticket-type />
        <ticket-client />
        <ticket-elements />
      </div>

      <div class="tw-absolute tw-bottom-0 tw-w-full tw-z-10 tw-bg-white">
        <ticket-options />
        <ticket-price />

      </div>
  </v-navigation-drawer>
  </template>
  
  <script setup>
  import SidebarAccount from './sidebar/SidebarAccount.vue';
  import TicketType from './sidebar/TicketType.vue';
  import TicketClient from './sidebar/TicketClient.vue';
  import TicketPrice from './sidebar/TicketPrice.vue';
  import TicketElements from './sidebar/TicketElements.vue';
  import TicketOptions from './sidebar/TicketOptions.vue';
  
  </script>
  
  <style>
  
  </style>