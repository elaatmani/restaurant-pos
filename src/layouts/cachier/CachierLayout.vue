<template>
  <v-layout :full-height="true" class="rounded rounded-md">
    
    <cachier-layout-sidebar v-model:drawer="drawer" />

    <cachier-layout-header v-model:drawer="drawer" />

    <cash-register-new-entry />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script setup>
import CachierLayoutSidebar from './partials/CachierLayoutSidebar';
import CachierLayoutHeader from './partials/CachierLayoutHeader';
import CashRegisterNewEntry from '@/components/cachier/cash-registers/CashRegisterNewEntry';
import { ref } from 'vue';

const drawer = ref(true);

</script>

<style>

</style>