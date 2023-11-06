<template>
  <div>
    <button
    @click="showPopup = true"
    type="button"
    class="tw-border-solid tw-duration-200 tw-text-white tw-bg-emerald-500 tw-border tw-border-emerald-300 focus:tw-outline-none hover:tw-bg-emerald-600 focus:tw-ring-4 focus:tw-ring-emerald-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5"
    >
    Payer
    </button>


    <popup z-index="1" :visible="showPopup" @cancel="showPopup = false" :closeable="false">
        <div
        class="tw-max-w-[650px] tw-w-full tw-bg-white tw-rounded-md tw-mx-auto tw-border tw-border-solid tw-border-gray-400"
        >

        <div class="tw-p-5">
            <div class="tw-mb-5">
                <p class="tw-font-bold">Total</p>
                <p class="tw-text-4xl tw-font-bold tw-text-gray-600">{{ total }} {{ currency }}</p>
            </div>

            <div>
                <p class="tw-font-bold">Mode de paiement</p>
                <div class="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-3 tw-mt-2">
                    <button 
                    @click="mode = 'cash'" 
                    :class="[mode == 'cash' && '!tw-bg-green-500 !tw-border-green-300 !tw-text-white']"
                    class="tw-border-solid tw-px-5 tw-py-2 tw-border tw-rounded-md tw-flex tw-items-center tw-justify-center tw-flex-col tw-gap-2">
                        <icon :class="[mode == 'cash' && '!tw-text-white']" class="tw-text-5xl tw-text-green-500" icon="iconoir:hand-cash" />
                        <span class="tw-text-lg">Espèces</span>
                    </button>
                    <button 
                    @click="mode = 'credit-card'" 
                    :class="[mode == 'credit-card' && '!tw-bg-blue-500 !tw-border-blue-300 !tw-text-white']"
                    class="tw-border-solid tw-px-5 tw-py-2 tw-border tw-rounded-md tw-flex tw-items-center tw-justify-center tw-flex-col tw-gap-2">
                        <icon :class="[mode == 'credit-card' && '!tw-text-white']" class="tw-text-5xl tw-text-blue-500" icon="bi:credit-card-fill" />
                        <span class="tw-text-lg tw-whitespace-nowrap">Credit Card</span>
                    </button>

                </div>
            </div>

            <div v-if="mode == 'cash'" class="tw-mt-5 tw-grid md:tw-grid-cols-2 tw-gap-5">
                <div>
                    <p class="tw-font-bold">Soumissionné</p>
                    <div class="tw-w-full tw-relative">
                        <span class="tw-flex tw-h-fit tw-translate-y-[-40%] tw-top-1/2 tw-items-center tw-justify-center tw-absolute tw-right-5  tw-text-lg tw-font-semibold tw-text-gray-600">{{ currency }}</span>
                        <input v-model="tendered" inputmode="decimal" type="number" :placeholder="'0.00'" 
                        class="tw-mt-2 tw-text-lg tw-pr-10 tw-py-3 tw-px-4 tw-font-bold tw-border-solid tw-border tw-rounded-md tw-w-full tw-outline-none focus:tw-border-primary-500">
                    </div>
                </div>
                
                <div>
                    <p class="tw-font-bold">Le reste</p>
                    <div class="tw-w-full tw-relative">
                        <span class="tw-flex tw-h-fit tw-translate-y-[-40%] tw-top-1/2 tw-items-center tw-justify-center tw-absolute tw-right-5  tw-text-lg tw-font-semibold tw-text-gray-600">{{ currency }}</span>
                        <input 
                        v-model="calculatedRest" 
                        readonly 
                        inputmode="decimal" 
                        type="number" 
                        :placeholder="'0.00'" 
                        :class="(calculatedRest < 0 && tendered != 0) ? '!tw-text-red-500' : '!tw-text-green-500'"
                        class="tw-mt-2 tw-text-lg tw-pr-10 tw-py-3 tw-px-4 tw-font-bold tw-border-solid tw-border tw-rounded-md tw-w-full tw-outline-none focus:tw-border-primary-500">
                    </div>
                </div>
            </div>

            <div class="tw-mt-5">

            </div>

        </div>

        <div
          class="tw-p-5 tw-w-full tw-flex tw-justify-end tw-items-center tw-gap-3 tw-border-t"
        >
          <button
            @click="showPopup = false"
            type="button"
            class="tw-border-solid tw-duration-200 tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-gray-800 dark:tw-text-white dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700"
          >
            Annuler
          </button>

          <button
            @click="handlePaymentConfirmed"
            type="button"
            class="tw-border-solid tw-duration-200 tw-text-white tw-bg-emerald-500 tw-border tw-border-emerald-300 focus:tw-outline-none hover:tw-bg-emerald-600 focus:tw-ring-4 focus:tw-ring-emerald-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5"
            >
            Confirmer
            </button>
        </div>
        </div>
    </popup>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits, defineProps } from "vue";
import useAlertStore from '@/stores/alertStore';
import { currency } from "@/config/app";
import totalPrice from "@/core/totalPrice";

const props = defineProps(['ticket']);
const emit = defineEmits(['close']);
const total = computed(() => totalPrice(props.ticket));
const tendered = ref(0);
const showPopup = ref(false);
const mode = ref('cash');
const calculatedRest = computed(() => tendered.value != 0 ? (total.value - parseFloat(tendered.value)) * -1 : 0)

const handlePaymentConfirmed = () => {
    showPopup.value = false;
    emit('close');
    useAlertStore().toggle({
        type: 'success',
        body: 'Paiement confirmé !'
    })

}
</script>

<style>

</style>