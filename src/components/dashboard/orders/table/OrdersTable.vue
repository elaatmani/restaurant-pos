<template>
    <div>

        <vue-datatable 
            :search="search"
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
                </div>
            </template>
            <template #status="data">
                <OrderStatus :key="data.value.id" :order="data.value" />
            </template>

            <template #is_paid="data">
                <icon v-if="data.value.is_paid" icon="ic:round-check" class="tw-text-xl tw-text-emerald-500" />
                <icon v-else icon="mi:close" class="tw-text-xl tw-text-rose-500" />
            </template>

            <template #payment_type="data">
                <div v-if="data.value.payment_type == 'card'" class="tw-flex tw-items-center tw-gap-2">
                    <icon icon="bi:credit-card-fill" class="tw-text-lg tw-text-gray-600" />
                    <span class="tw-text-xs">Card</span>
                    
                </div>
                <div v-if="data.value.payment_type == 'cash'" class="tw-flex tw-items-center tw-gap-2">
                    <icon icon="iconoir:hand-cash" class="tw-text-lg tw-text-gray-600" />
                    <span class="tw-text-xs">Espèces</span>
                </div>
            </template>

            <template #by="data">
                <p class="tw-max-w-[120px] tw-truncate">{{ data.value?.by }}</p>
            </template>
            <template #actions="data">
                <div>
                    <OrdersTableActions :data="data.value" :key="data.value.id" />
                </div>
            </template>
        </vue-datatable>

</div>
</template>
<script setup>
import OrdersTableActions from './OrdersTableActions.vue';
import { ref, computed, defineProps } from 'vue';
import OrderStatus from './../OrderStatus'

const props = defineProps(['data', 'loading', 'search']);

const rows = computed(() => props.data);
const cols = ref([
            { field: 'id', title: 'ID', isUnique: true, width: '50px' },
            { field: 'by', title: 'Par' },
            { field: 'status', title: 'Status' },
            { field: 'is_paid', title: 'Payé' },
            { field: 'payment_type', title: 'Paiment' },
            { field: 'order_tip', title: 'Pourboire' },
            { field: 'created_at', title: 'Créé à' },
            { field: 'actions', title: '', sort: false, width: "60px" },
        ]) || [];

</script>