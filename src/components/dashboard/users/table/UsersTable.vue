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
            <template #actions="data">
                <div>
                    <UsersTableActions :data="data.value" :key="data.value.id" />
                </div>
            </template>
        </vue-datatable>

</div>
</template>
<script setup>
import UsersTableActions from './UsersTableActions.vue';
import { ref, computed, defineProps } from 'vue';

const props = defineProps(['data', 'loading']);

const rows = computed(() => props.data);
const cols = ref([
            { field: 'id', title: 'ID', isUnique: true },
            { field: 'name', title: 'Nom' },
            { field: 'email', title: 'Email' },
            { field: 'role', title: 'Rôle', sort: false },
            { field: 'actions', title: '', sort: false, width: "60px" },
        ]) || [];

</script>