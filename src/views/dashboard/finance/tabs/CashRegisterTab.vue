<template>
  <div>
    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-2">
        <DashboardCard v-for="card in cards" :key="card.name" :card="card" />
    </div>

    <div class="tw-mt-3"></div>
    
    <CashRegisterTable :data="cashRegisters" :loading="loading" />

  </div>
</template>

<script setup>
import DashboardCard from '@/components/dashboard/statistics/DashboardCard';
import CashRegisterTable from '@/components/dashboard/finance/cash-registers/table/CashRegisterTable.vue';
import CashRegister from '@/api/dashboard/CashRegister';
import useCashStore from '@/stores/dashboard/cashStore';
import { currency } from "@/config/app";
import { computed, ref } from 'vue';
import Dashboard from '@/api/dashboard/Dashboard';

const cashStore = useCashStore();
const loading = ref(false);
const cashRegisters = computed(() => cashStore.cashRegisters);

const params = ref({});

const cards = ref([
    {
        name: 'C.A DU JOUR',
        value: 0,
        icon: 'bx:rocket',
        callback: async () => {
            return Dashboard.ca_off(params)
            .then( res => res.data.result.toFixed(2) + ' ' + currency)
        }
    },
    {
        name: 'R.BRUT DU JOUR',
        value: 0,
        icon: 'solar:calculator-broken',
        callback: async () => {
            return Dashboard.ca_net(params)
            .then( res => res.data.result.toFixed(2) + ' ' + currency)
        }
    },
    {
        name: 'C.A REALISE',
        value: 0,
        icon: 'streamline:money-cash-bag-dollar-bag-payment-cash-money-finance',
        callback: async () => {
            return Dashboard.ca_gross(params)
            .then( res => res.data.result.toFixed(2) + ' ' + currency)
        }
    },
    {
        name: 'R.BRUT REALISE',
        value: '0 ' + currency,
        icon: 'tabler:brand-cashapp'
    },
  ]);

const getCashRegisters = async () => {
    loading.value = true;
    await CashRegister.all()
    .then(
        res => {
            if(res.data.status == 200) {
                cashStore.setCashRegisters(res.data.result);
            }
        }
    );

    loading.value = false;
}

getCashRegisters();
</script>
