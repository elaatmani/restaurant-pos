<template>
  <v-app-bar class="tw-top-0 !tw-fixed !tw-overflow-visible tw-border-b" elevation="0">
    <v-app-bar-nav-icon variant="text" @click.stop="emit('update:drawer', !props.drawer)"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    drawer: {
        required: false,
        default: true
    }
})

const emit = defineEmits(['update:drawer'])


</script>

<style>

</style>