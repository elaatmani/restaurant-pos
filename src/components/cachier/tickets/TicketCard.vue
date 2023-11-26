<template>
  <div>
    <ticket-card-popup v-model:visible="visible" :ticket="props.ticket" />
    
    <button
      @click="visible = true"
      class="tw-block tw-w-full tw-border-solid tw-border-gray-200 tw-relative tw-p-4 tw-border tw-rounded-md tw-bg-white tw-duration-200 hover:tw-shadow-md tw-cursor-pointer"
    >
      <div
        class="tw-absolute tw-right-0 tw-top-0 tw-rounded-tr-md tw-p-1 tw-rounded-bl-lg"
        :class="types[props.ticket.type].color"
      >
        <icon
          class="tw-text-lg tw-text-white"
          :icon="types[props.ticket.type].icon"
        />
      </div>

      <div class="tw-font-bold tw-flex tw-items-center tw-gap-2">
        <span class="tw-text-sm tw-bg-gray-100 tw-rounded-md tw-px-1">10:34</span>
        <h1 class="tw-font-bold">
           #123</h1>
      </div>
      <div class="tw-mt-2">
        <!-- <img :src="$frontend(props.ticket.item.image)" class="tw-w-12 tw-h-12 tw-rounded-sm"> -->
      </div>
    </button>
  </div>
</template>

<script setup>
import TicketCardPopup from "./TicketCardPopup.vue";
import { defineProps, ref } from "vue";

const props = defineProps({
  ticket: {
    required: true,
  },
});

const visible = ref(false);
const types = {
  1: { icon: "grommet-icons:cafeteria", color: "tw-bg-green-500" },
  2: { icon: "ri:takeaway-fill", color: 'tw-bg-blue-500' },
  3: { icon: "iconoir:bag", color: 'tw-bg-amber-500' },
};
</script>

<style>
</style>