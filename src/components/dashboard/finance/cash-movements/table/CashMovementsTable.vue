<template>
    <div>
        <vue-datatable :key="rows.length" :columns="cols" :rows="rows" :loading="loading" :totalRows="rows.length"
            :sortable="true" skin="bh-table-striped bh-table-hover bh-table-bordered bh-table-compact">
            <template #created_at="data">
                <div>
                    {{ data.value.created_at?.split("T")[0] }}
                    {{ data.value.created_at?.split("T")[1].split(".")[0] }}
                </div>
            </template>
        </vue-datatable>
    </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
const props = defineProps(['data', 'loading']);

const rows = computed(() => props.data);
const cols = ref([
            { field: 'id', title: '#ID', isUnique: true, width: '50px' },
            { field: 'amount', title: 'Montant' },
            { field: 'mouvement_type', title: 'Type' },
            { field: 'description', title: 'Description' },
            { field: 'created_at', title: 'Créé à' },
            { field: 'actions', title: '', sort: false, width: "60px" },
        ]) || [];
</script>

<style></style>