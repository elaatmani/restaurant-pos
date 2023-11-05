<template>
  <div class="tw-h-full tw-min-h-[550px]">
    <div class="tw-p-5 tw-bg-gray-50 tw-h-full">
      <div
        class="tw-bg-white tw-p-5 tw-rounded-lg tw-shadow tw-w-full tw-h-full"
      >
        <div class="tw-flex tw-items-center tw-justify-between">
          <h1 class="tw-font-bold tw-text-gray-600">Liste Tickets</h1>
          <ticket-filter v-model:filters="filters" />
        </div>

        <div class="tw-grid tw-grid-cols-12 tw-mt-5 tw-gap-5">
            <template v-if="filteredTickets.length">
              <div  v-for="ticket in filteredTickets" :key="ticket" class="lg:tw-col-span-3 md:tw-col-span-4 sm:tw-col-span-6 tw-col-span-12 ">
                  <TicketCard :ticket="ticket" />
              </div>
            </template>
            <template v-else>
              <div class="tw-p-16 tw-col-span-12 tw-bg-gray-50 tw-rounded-md">
                <p class="tw-text-center tw-text-lg tw-text-gray-600 tw-font-semibold">Pas de tickets</p>
              </div>
            </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TicketCard from '@/components/cachier/tickets/TicketCard.vue';
import TicketFilter from '@/components/cachier/tickets/TicketFilter.vue';
import useTicketStore from '@/stores/ticketStore';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const { tickets } = storeToRefs(useTicketStore());
const filters = ref({
  type: "all"
});

const filteredTickets = computed(() => {
  return tickets.value.filter(t => filters.value.type == "all" ? true : t.type == filters.value.type);
})


</script>

<style>
</style>