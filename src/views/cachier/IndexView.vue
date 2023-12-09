<template>
    <div class="tw-h-full tw-min-h-[550px]">
        <div class="tw-p-5 tw-bg-gray-50 tw-h-full">
            <div class="tw-bg-white tw-p-5 tw-rounded-lg tw-shadow tw-w-full tw-h-full">
                <h1 class="tw-font-bold tw-text-gray-600">Tableau de board</h1>

                <div class="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-5 tw-mt-5">
                    <div class="tw-p-5 tw-min-h-[130px] tw-bg-gradient-to-r tw-from-amber-500 tw-to-rose-400 tw-rounded-lg tw-relative tw-overflow-hidden">
                        <div class="tw-relative tw-z-10">
                            <h1 class="tw-font-bold tw-text-white md:tw-text-lg tw-text-sm">N° Tickets du jour</h1>
                            <span class="tw-text-5xl tw-font-black tw-text-white tw-mt-2 tw-block">{{ todayTickets }}</span>
                        </div>
                        <icon class="tw-text-white tw-opacity-25 tw-text-9xl tw-translate-x-1/4 tw-translate-y-1/4 tw-absolute tw-right-0 tw-bottom-0" icon="fluent:reciept-24-filled" />
                    </div>

                    <div class="tw-p-5 tw-min-h-[130px] tw-bg-gradient-to-r tw-from-purple-400 tw-to-blue-400 tw-rounded-lg tw-relative tw-overflow-hidden">
                        <div class="tw-relative tw-z-10">
                            <h1 class="tw-font-bold tw-text-white tw-text-lg">N° Tickets en attente</h1>
                            <span class="tw-text-5xl tw-font-black tw-text-white tw-mt-2 tw-block">{{ preparingTickets }}</span>
                        </div>
                        <icon class="tw-text-white tw-opacity-25 tw-text-9xl tw-translate-x-1/4 tw-translate-y-1/4 tw-absolute tw-right-0 tw-bottom-0" icon="mdi:clock-time-nine" />
                    </div>

                </div>

            </div>
        </div>
  </div>
</template>

<script setup>
import useTicketStore from '@/stores/ticketStore';
import { computed } from 'vue';
import { PREPARING } from '@/core/ticket'

const ticketStore = useTicketStore();
const todayTickets = computed(() => ticketStore.tickets.length);
const preparingTickets = computed(() => ticketStore.tickets.filter(t => t.status == PREPARING).length);


</script>

<style>

</style>