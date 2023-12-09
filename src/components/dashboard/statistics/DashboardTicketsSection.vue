<template>
  <div>
      <div class="tw-grid md:tw-grid-cols-2 tw-gap-2">
        <div>
            <h1>Type de tickets</h1>
            <div v-if="!loadingType" class="tw-mt-3 tw-flex tw-items-center tw-gap-2">
                <div class="tw-border tw-border-solid tw-border-gray-200 tw-p-3 tw-flex-1">
                    <div class="tw-flex tw-items-center tw-justify-between tw-gap-1">
                        <span class="tw-text-sm">Sur place</span>
                        <icon icon="grommet-icons:cafeteria" class="tw-text-xl tw-text-gray-600" />
                    </div>
                    <h1 class="tw-font-bold tw-mt-2 tw-text-xl tw-text-emerald-500">{{ data.nb_tickets_on_site }}</h1>
                </div>
                <div class="tw-border tw-border-solid tw-border-gray-200 tw-p-3 tw-flex-1">
                    <div class="tw-flex tw-items-center tw-justify-between tw-gap-1">
                        <span class="tw-text-sm">Livraison</span>
                        <icon icon="ri:takeaway-fill" class="tw-text-xl tw-text-gray-600" />
                    </div>
                    <h1 class="tw-font-bold tw-mt-2 tw-text-xl tw-text-emerald-500">{{ data.nb_tickets_delivered }}</h1>
                </div>
                <div class="tw-border tw-border-solid tw-border-gray-200 tw-p-3 tw-flex-1">
                    <div class="tw-flex tw-items-center tw-justify-between tw-gap-1">
                        <span class="tw-text-sm">Emporter</span>
                        <icon icon="grommet-icons:cafeteria" class="tw-text-xl tw-text-gray-600" />
                    </div>
                    <h1 class="tw-font-bold tw-mt-2 tw-text-xl tw-text-emerald-500">{{ data.nb_tickets_imported }}</h1>
                </div>
            </div>

            <div v-else class="tw-mt-3 tw-flex tw-items-center tw-gap-2">
                <div class="tw-border tw-border-solid tw-border-gray-200 tw-p-3 tw-flex-1 tw-h-[78px] tw-bg-gray-200 tw-animate-pulse" v-for="i in 3" :key="i">
                </div>
            </div>
        </div>

        <div>
            <h1>Methods de paiment</h1>
            <div v-if="!loadingMethod" class="tw-mt-3 tw-flex tw-items-center tw-gap-2">
                <div class="tw-border tw-border-solid tw-border-gray-200 tw-p-3 tw-flex-1">
                    <div class="tw-flex tw-items-center tw-justify-between tw-gap-1">
                        <span class="tw-text-sm">Espèces</span>
                        <icon icon="iconoir:hand-cash" class="tw-text-xl tw-text-gray-600" />
                    </div>
                    <h1 class="tw-font-bold tw-mt-2 tw-text-xl tw-text-emerald-500">{{ data.nb_tickets_on_site }}</h1>
                </div>
                <div class="tw-border tw-border-solid tw-border-gray-200 tw-p-3 tw-flex-1">
                    <div class="tw-flex tw-items-center tw-justify-between tw-gap-1">
                        <span class="tw-text-sm">Credit Card</span>
                        <icon icon="bi:credit-card-fill" class="tw-text-xl tw-text-gray-600" />
                    </div>
                    <h1 class="tw-font-bold tw-mt-2 tw-text-xl tw-text-emerald-500">{{ data.nb_tickets_delivered }}</h1>
                </div>
        
            </div>
            <div v-else class="tw-mt-3 tw-flex tw-items-center tw-gap-2">
                <div class="tw-border tw-border-solid tw-border-gray-200 tw-p-3 tw-flex-1 tw-h-[78px] tw-bg-gray-200 tw-animate-pulse" v-for="i in 2" :key="i">
                </div>
            </div>
        </div>

    </div>
  </div>
</template>

<script setup>
import Dashboard from "@/api/dashboard/Dashboard";
import { ref, inject, reactive } from "vue";

const loadingType = ref(false);
const loadingMethod = ref(false);
const params = inject('params');
const data = reactive({
    nb_tickets_on_site: 0,
    nb_tickets_imported: 0,
    nb_tickets_delivered: 0,

    nb_tickets_cash: 0,
    nb_tickets_card: 0
})

const getTypeData = async () => {
    loadingType.value = true;
    
    await Dashboard.ticket_types(params.params.value)
    .then(
        res => {
            data.nb_tickets_delivered = res.data.result.nb_tickets_delivered
            data.nb_tickets_imported = res.data.result.nb_tickets_imported
            data.nb_tickets_on_site = res.data.result.nb_tickets_on_site
        }
    )

    loadingType.value = false;
} 

const getMethodData = async () => {
    loadingMethod.value = true;
    
    await Dashboard.ticket_paymentmethods(params.params.value)
    .then(
        res => {
            data.nb_tickets_card = res.data.result.nb_tickets_card
            data.nb_tickets_cash = res.data.result.nb_tickets_cash
        }
    )

    loadingMethod.value = false;
} 

getTypeData();
getMethodData();
</script>

<style>

</style>