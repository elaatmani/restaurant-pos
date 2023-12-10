<template>
    <div class="tw-p-2 tw-w-full tw-sticky  tw-top-0 tw-bg-white tw-border-b tw-border-gray-200">
        <div class="tw-grid tw-grid-cols-3 tw-p-1 tw-bg-gray-100 tw-rounded tw-gap-1">
            <button 
            @click="type = 1"
            :class="[type == 1 && 'tw-bg-white tw-shadow-sm tw-border-gray-400']"
            class="tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-border-transparent tw-px-2 tw-py-1 tw-rounded tw-duration-300">
                <icon class="tw-text-xl tw-text-gray-600" icon="grommet-icons:cafeteria" />
            </button>

            <button 
            @click="type = 2"
            :class="[type == 2 && 'tw-bg-white tw-shadow-sm tw-border-gray-400']"
            class="tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-border-transparent tw-px-2 tw-py-1 tw-rounded tw-duration-300">
                <icon class="tw-text-2xl tw-text-gray-600" icon="ri:takeaway-fill" />
            </button>

            <button 
            @click="type = 3"
            :class="[type == 3 && 'tw-bg-white tw-shadow-sm tw-border-gray-400']"
            class="tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-border-transparent tw-px-2 tw-py-1 tw-rounded tw-duration-300">
                <icon class="tw-text-2xl tw-text-gray-600" icon="iconoir:bag" />
            </button>
        </div>
    </div>
</template>

<script setup>
import useTicketStore from '@/stores/ticketStore';
import { computed } from 'vue';

const store = useTicketStore();

const type = computed({
    get: () => store.currentTicket.type,
    set: (id) => store.setCurrentTicketType(id)
});


</script>

<style>

</style>