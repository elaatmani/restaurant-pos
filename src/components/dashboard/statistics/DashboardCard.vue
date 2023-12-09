<template>
    <div class="tw-p-3 tw-border tw-border-gray-200 tw-bg-white tw-flex tw-justify-between">
        <div class="tw-flex tw-text-gray-600 tw-flex-col">
            <span class="tw-text-xs tw-font-bold">{{ props.card.name }}</span>
            <h1 v-if="loading" class="tw-h-[29px] tw-flex tw-items-center">
                <icon icon="line-md:loading-twotone-loop" class="tw-text-xl tw-text-primary-500" />
            </h1>
            <h1 v-else class="tw-text-lg tw-font-medium tw-text-primary-500">
                {{ value }}
            </h1>
        </div>
        <icon class="tw-text-4xl tw-text-gray-600" :icon="props.card.icon" />
    </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    card: Object
});

const value = ref(props.card.value);
const loading = ref(false);

const getData = async () => {
    if(props.card.callback) {
        loading.value = true;
        await props.card.callback()
        .then(
            res => {
                value.value = res;
            }
        )
        loading.value = false;
    }
}

getData();

</script>
<style lang="">
    
</style>