<template>
  <div class="tw-w-full tw-mt-auto tw-self-end tw-grid tw-grid-cols-4 tw-border-t tw-border-solid !tw-divide-x">

        <ticket-cancel />

        <ticket-table />

        <button class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
            <icon class="tw-text-orange-500 tw-text-2xl" icon="entypo:bell" />
            <span class="tw-text-xs">Demandez la suite</span>
        </button>

        <button @click="prepare" class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
            <icon class="tw-text-amber-900 tw-text-2xl" icon="solar:chef-hat-minimalistic-bold" />
            <span class="tw-text-xs">Preparer</span>
        </button>
    </div>
</template>

<script setup>
import TicketCancel from './TicketCancel.vue';
import TicketTable from './TicketTable.vue';
import useTicketStore from '@/stores/ticketStore'
import { PREPARING } from '@/core/ticket';
import useAlert from '@/composables/useAlert';
// import Order from '@/api/dashboard/Order';

const ticketStore = useTicketStore();

const prepare = () => {
    // Order.create()
    ticketStore.addTicket({...ticketStore.currentTicket, status: PREPARING});
    ticketStore.emptyCurrentTicket();

    useAlert('Preparing...', 'info')

}

</script>

<style>

</style>