<template>
  <popup :visible="props.visible" @cancel="emit('update:visible', false)">
    <div
      class="tw-max-w-[450px] tw-w-full tw-bg-white tw-rounded-md tw-mx-auto tw-border tw-border-solid tw-border-gray-400"
    >
      <div class="tw-min-h-[350px] tw-flex tw-flex-col">
        <div class="tw-p-3 tw-border-b tw-flex tw-items-center tw-gap-2">
          <h1
            class="tw-w-fit tw-h-full tw-flex tw-items-center tw-font-bold tw-text-gray-600 tw-text-lg tw-bg-gray-100 tw-px-2 tw-rounded-md"
          >
            #123
          </h1>
          <h1
            class="tw-w-fit tw-h-full tw-flex tw-items-center tw-gap-1 tw-text-blue-600 tw-text-md tw-bg-blue-100 tw-px-2 tw-rounded-md"
          >
            <icon class="tw-text-blue-500" icon="formkit:time" />
            <span>10:25</span>
          </h1>
          <div class="tw-flex-1"></div>
          <div
            class="tw-p-2 tw-rounded-md"
            :class="types[props.ticket.type].color"
          >
            <icon
              class="tw-text-lg tw-text-white"
              :icon="types[props.ticket.type].icon"
            />
          </div>
        </div>

        <div class="">
            <ul class="tw-space-y-4 tw-divide-y">
                <li 
                v-for="item in props.ticket.items" :key="item"
                class="tw-flex tw-items-start tw-gap-4 tw-p-5"
                >
                    <div class="tw-min-w-[64px]">
                        <img :src="$frontend(item.item.image)" class="!tw-w-[64px]  tw-rounded-md !tw-aspect-square">
                    </div>
                    <div>
                        <h1 class="tw-text-lg tw-font-semibold"><span>{{ item.menu_item.name }}</span> <span class="tw-text-emerald-500 tw-font-bold tw-ml-2">x {{ item.quantity }}</span></h1>
                        <h2 class="tw-text-gray-600 ">{{ item.item.name }}</h2>
                        <div class="tw-flex">
                            <p v-if="!!item.note" class="tw-bg-amber-100 tw-max-w-full tw-px-2 tw-py-1 tw-mt-2 tw-text-sm tw-text-black tw-rounded-md">
                                {{ item.note }}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="tw-flex-1"></div>

        <div
          class="tw-p-5 tw-w-full tw-flex tw-justify-end tw-items-center tw-gap-3 tw-border-t"
        >
          <button
            @click="emit('update:visible', false)"
            type="button"
            class="tw-border-solid tw-duration-200 tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-gray-800 dark:tw-text-white dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700"
          >
            Annuler
          </button>

          <TicketPayment :ticket="props.ticket" @close="emit('update:visible', false)" />
        </div>
      </div>
    </div>
  </popup>
</template>

<script setup>
import TicketPayment from "./TicketPayment.vue";
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["update:visible"]);
const props = defineProps(["visible", "ticket"]);

const types = {
  1: { icon: "grommet-icons:cafeteria", color: "tw-bg-green-500" },
  2: { icon: "ri:takeaway-fill", color: "tw-bg-blue-500" },
  3: { icon: "iconoir:bag", color: "tw-bg-amber-500" },
};
</script>

<style>
</style>