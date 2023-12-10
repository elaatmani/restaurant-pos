<template>
  <div class="w-full tw-h-full tw-items-center justify-center">
    <!-- <button @click="showPopup = true" class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
        <icon class="tw-text-red-500 tw-text-2xl" icon="mdi:cancel-circle" />
        <span class="tw-text-xs">Annuler</span>
    </button> -->
    <button @click="showPopup = true" class="tw-h-full tw-border-r tw-border-gray-200 tw-py-1 tw-w-full tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
        <icon class="tw-text-red-500 tw-text-2xl" icon="mdi:cancel-circle" />
        <span class="tw-text-xs">Annuler</span>
    </button>

    <popup :visible="showPopup" @cancel="showPopup = false">
        <div class="tw-mx-auto tw-w-[95%] md:tw-max-w-[400px] tw-overflow-hidden tw-min-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md  tw-my-5 tw-rounded-lg">
                <div class="tw-px-5 tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 tw-py-4 dark:tw-bg-neutral-800 tw-bg-white">
                <v-icon size="x-large" class="dark:tw-text-red-400 tw-text-red-500">mdi-alert-outline</v-icon>
                <p>
                    Etes-vous sûr de vouloir vider cette ticket ?
                </p>
                </div>
                <div class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-neutral-100">
                <button @click="showPopup = false" class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-black/20 tw-bg-neutral-300  dark:tw-bg-neutral-600  tw-duration-300  tw-text-neutral-900 dark:tw-text-neutral-300">
                    Annuler
                </button>
                <button @click="emptyCurrentTicket" class="tw-py-2 tw-px-7 tw-flex tw-items-center tw-font-medium tw-rounded tw-text-sm tw-bg-red-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-red-600 dark:tw-border-neutral-900 dark:hover:tw-border-red-500 hover:tw-bg-red-500/80 dark:hover:tw-bg-red-400 tw-duration-300  tw-text-neutral-800">
                    <span>Confirmer</span>
                </button>
                </div>
            </div>
    </popup>
</div>
</template>

<script setup>
import { ref } from "vue";
import useTicketStore from '@/stores/ticketStore';

const showPopup = ref(false);
const store = useTicketStore();

const emptyCurrentTicket = () => {
    console.log(store)
    store.emptyCurrentTicket()
    console.log(store)
    showPopup.value = false;
}

</script>

<style>

</style>