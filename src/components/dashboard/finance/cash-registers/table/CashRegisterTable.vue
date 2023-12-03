<template>
    <div>


        <vue-datatable 
            :key="rows.length"
            :columns="cols" 
            :rows="rows"
            :loading="loading"
            :totalRows="rows.length"
            :sortable="true"
            skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact"
            >
            <template #created_at="data">
                <div>
                    {{ data.value.created_at?.split('T')[0] }}
                    {{ data.value.created_at?.split('T')[1].split('.')[0] }}
                </div>
            </template>

            <template #amount="data">
                <div>
                    {{ totalUnits(data.value.cash_units) }} {{ currency }}
                </div>
            </template>

            <template #by="data">
                <div>
                    {{ data.value.cashier.name }}
                </div>
            </template>

            <template #type="data">
                <div v-if="data.value.register_type == 'in'" class="tw-text-green-500 tw-font-bold">
                    Ouverture
                </div>
                <div v-if="data.value.register_type == 'out'" class="tw-text-amber-500 tw-font-bold">
                    Fermeture
                </div>
            </template>

            <!-- <template #actions="data">
                <div>
                    <ItemsTableActions :data="data.value" :key="data.value.id" />
                </div>
            </template> -->
        </vue-datatable>

</div>
</template>
<script setup>
// import ItemsTableActions from './ItemsTableActions.vue';
import { currency } from '@/config/app';
import { totalUnits } from '@/utils/cash-register';
import { ref, computed, defineProps } from 'vue';

const props = defineProps(['data', 'loading']);

const rows = computed(() => props.data);
const cols = ref([
            { field: 'id', title: '#ID', isUnique: true, width: '50px' },
            { field: 'amount', title: 'Montant' },
            { field: 'type', title: 'Type' },
            { field: 'by', title: 'Par' },
            { field: 'role', title: 'Role' },
            { field: 'created_at', title: 'Créé à' },
            { field: 'actions', title: '', sort: false, width: "60px" },
        ]) || [];


</script>