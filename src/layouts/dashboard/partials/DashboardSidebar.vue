<template>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        v-model="isActive" class="!tw-fixed !tw-top-0 tw-min-h-screen tw-border-none" :absolute="false"
        theme="dark"
      >
        <div class="tw-text-white tw-text-2xl tw-font-bold tw-text-center tw-p-5">
            POS
        </div>
        <v-list nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Tableau de board" :to="{ name: 'dashboard' }" exact link></v-list-item>
          <v-list-item prepend-icon="mdi-cash-register" title="Finance" :to="{ name: 'dashboard.finance' }"></v-list-item>
          <v-list-item prepend-icon="mdi-food" title="Menu" :to="{ name: 'dashboard.menu' }"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Utilisateurs" :to="{ name: 'dashboard.users' }" link></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Paramétres" :to="{ name: 'dashboard.settings' }" link></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>
<script setup>
import { computed, defineEmits, defineProps } from 'vue';
const emit = defineEmits(['update:drawer'])
const props = defineProps({
  drawer: {
    required: true
  }
})

const isActive = computed({
  get: () => props.drawer,
  set: (v) => emit('update:drawer', v)
})

</script>
<style lang="">
    
</style>