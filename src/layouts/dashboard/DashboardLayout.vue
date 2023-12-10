<template>
  <v-layout v-if="store.isLoggedIn" :full-height="true" class="rounded rounded-md">

    <DashboardSidebar v-model:drawer="drawer" />
    
    <DashboardHeader v-model:drawer="drawer" />


    <v-main class="">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script setup>
import DashboardHeader from './partials/DashboardHeader';
import DashboardSidebar from './partials/DashboardSidebar';
import authStore from '@/stores/authStore';
import { ref } from 'vue';

const drawer = ref(true);
const store = authStore();

</script>

<style>

</style>