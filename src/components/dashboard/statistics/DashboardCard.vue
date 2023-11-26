<template>
    <div class="tw-p-3 tw-border tw-border-gray-200 tw-bg-white tw-flex tw-justify-between">
        <div class="tw-flex tw-text-gray-600 tw-flex-col">
            <span class="tw-text-xs tw-font-bold">{{ props.name }}</span>
            <h1 class="tw-text-lg tw-font-medium tw-text-primary-500">
                {{ props.value }}
            </h1>
        </div>
        <icon class="tw-text-4xl tw-text-gray-600" :icon="props.icon" />
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: String,
    value: [String, Number],
    icon: String
})
</script>
<style lang="">
    
</style>