<template>
  <div>
    <CashMovementsTable :data="cashMovements" :loading="loading" />
  </div>
</template>

<script setup>
import CashMovementsTable from '@/components/dashboard/finance/cash-movements/table/CashMovementsTable';
import CashMovement from '@/api/dashboard/CashMovement';
import useCashStore from '@/stores/dashboard/cashStore'
import { ref } from 'vue';

const loading = ref(false);
const cashStore = useCashStore();
const cashMovements = cashStore.cashMovements;

const getCashMovements = async () => {
    loading.value = true;
    await CashMovement.all()
    .then(
        res => {
            if(res.data.status == 200) {
                cashStore.setCashMovements(res.data.result);
            }
        }
    );

    loading.value = false;
}

getCashMovements();
</script>

<style>

</style>