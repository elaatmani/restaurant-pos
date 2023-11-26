<template>
  <div class="tw-h-full tw-min-h-[550px]">
    <div class="tw-p-5 tw-bg-gray-50 tw-h-full">
      <div
        class="tw-bg-white  tw-rounded-lg tw-shadow tw-w-full tw-h-full"
      >
        <div class="tw-flex tw-p-2 tw-items-center tw-justify-between tw-border-b tw-border-gray-200">
          <div class="tw-flex tw-flex-wrap tw-gap-2">
            <button
              @click="filters.tab = 'today'"
              :class="filters.tab == 'today' && 'tw-bg-primary-500 tw-border-primary-300 tw-text-white'"
              class="tw-px-4 tw-py-1 tw-text-sm tw-rounded-md tw-border tw-border-gray-200 tw-border-solid tw-font-medium tw-duration-200"
              >
              Aujourd'hui
            </button>

            <button
            :class="filters.tab == 'not-paid' && 'tw-bg-primary-500 tw-border-primary-300 tw-text-white'"
            @click="filters.tab = 'not-paid'"
            class="tw-px-4 tw-py-1 tw-text-sm tw-rounded-md tw-border tw-border-gray-200 tw-border-solid tw-font-medium tw-duration-200"
            >
              Non Payé
            </button>

            <button
            :class="filters.tab == 'paid' && 'tw-bg-primary-500 tw-border-primary-300 tw-text-white'"
            @click="filters.tab = 'paid'"
              class="tw-px-4 tw-py-1 tw-text-sm tw-rounded-md tw-border tw-border-gray-200 tw-border-solid tw-font-medium tw-duration-200"
            >
              Completé
            </button>
          </div>
          <ticket-filter v-model:filters="filters" />
        </div>

        <div class="tw-grid tw-grid-cols-12 tw-gap-5 tw-p-5">
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
  tab: 'today', // 'not-paid' | 'paid';
  type: "all"
});

const filteredTickets = computed(() => {
  return tickets.value.filter(t => filters.value.type == "all" ? true : t.type == filters.value.type);
})


</script>

<style>
</style>