<template>
    <div class="tw-w-full tw-px-4 tw-py-3 tw-bg-red-500 tw-text-white tw-self-end tw-flex tw-items-center tw-justify-between">
        <span class="tw-text-lg tw-font-medium">Encaissez ( {{ totalItems }} )</span>
        <span class="tw-text-xl tw-font-bold">{{ totalPrice }} {{ currency }}</span>
    </div>
</template>

<script setup>
import calculateTotalPrice from '@/core/totalPrice'
import { currency } from '@/config/app'
import useTicketStore from '@/stores/ticketStore';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

const { currentTicket } = storeToRefs(useTicketStore());

const totalItems = computed(() => {
    return currentTicket.value.items.reduce((previous, current) => previous + (current.quantity), 0)
});

const totalPrice = computed(() => calculateTotalPrice(currentTicket.value))

</script>

<style>

</style>