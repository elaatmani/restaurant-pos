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
            <template #actions="data">
                <TablesTableActions :data="data.value" />
            </template>
        </vue-datatable>

</div>
</template>
<script setup>
import { ref, computed, defineProps } from 'vue';
import TablesTableActions from './TablesTableActions.vue';

const props = defineProps(['data', 'loading', 'search']);

const rows = computed(() => props.data);
const cols = ref([
            // { field: 'id', title: 'ID', isUnique: true, width: '50px' },
            { field: 'table_nb', title: 'N° Table' },
            { field: 'seats', title: 'Places' },
            { field: 'created_at', title: 'Créé à', width: '120px' },
            { field: 'actions', title: '', sort: false, width: "60px" },
        ]) || [];

</script>