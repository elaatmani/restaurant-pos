<template>
  <div>
    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-2">
        <DashboardCard v-for="card in cards" :key="card.name" :name="card.name" :value="card.value" :icon="card.icon" />
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

const cashStore = useCashStore();
const loading = ref(false);
const cashRegisters = computed(() => cashStore.cashRegisters);

const cards = [
    {
        name: 'C.A DU JOUR',
        value: '602 ' + currency,
        icon: 'bx:rocket'
    },
    {
        name: 'R.BRUT DU JOUR',
        value: '400 ' + currency,
        icon: 'solar:calculator-broken'
    },
    {
        name: 'C.A REALISE',
        value: '1,520 ' + currency,
        icon: 'streamline:money-cash-bag-dollar-bag-payment-cash-money-finance'
    },
    {
        name: 'R.BRUT REALISE',
        value: '0 ' + currency,
        icon: 'tabler:brand-cashapp'
    },
]

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
