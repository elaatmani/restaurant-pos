<template>
  <v-layout :full-height="true" class="rounded rounded-md">

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
import { ref } from 'vue';

const drawer = ref(true);


</script>

<style>

</style>