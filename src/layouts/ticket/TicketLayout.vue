<template>
    <v-layout :full-height="true" class="rounded rounded-md">
      
      <ticket-layout-sidebar />  
  
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </template>
  
  <script setup>
  import TicketLayoutSidebar from './partials/TicketLayoutSidebar';
  
  </script>
  
  <style>
  
  </style>