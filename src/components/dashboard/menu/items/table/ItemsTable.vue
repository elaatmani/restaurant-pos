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
                </div>
            </template>

            <template #item_variations="data">
                <div class="tw-flex">
                    {{ data.value.item_variations.map(i =>i.item_size).join(', ') }}
                    <!-- <span v-for="v in data.value.item_variations" :key="v.id">{{ v.item_size }},</span> -->
                </div>
            </template>
            <template #actions="data">
                <div>
                    <ItemsTableActions :data="data.value" :key="data.value.id" />
                </div>
            </template>
        </vue-datatable>

</div>
</template>
<script setup>
import ItemsTableActions from './ItemsTableActions.vue';
import { ref, computed, defineProps } from 'vue';

const props = defineProps(['data', 'loading']);

const rows = computed(() => props.data);
const cols = ref([
            { field: 'id', title: '#ID', isUnique: true, width: '50px' },
            { field: 'item_name', title: 'Nom' },
            { field: 'unit', title: 'Unité' },
            { field: 'item_variations', title: 'variations' },
            { field: 'created_at', title: 'Créé à' },
            { field: 'actions', title: '', sort: false, width: "60px" },
        ]) || [];

</script>