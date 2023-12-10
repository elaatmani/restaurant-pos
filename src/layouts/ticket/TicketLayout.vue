<template>
    <v-layout v-if="store.isLoggedIn" :full-height="true" class="rounded rounded-md">
      
      <ticket-layout-sidebar />  
  
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </template>
  
  <script setup>
  import authStore from '@/stores/authStore';
import TicketLayoutSidebar from './partials/TicketLayoutSidebar';
  
  const store = authStore();

  </script>
  
  <style>
  
  </style>