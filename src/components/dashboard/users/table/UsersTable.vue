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

            <template #role="data">
                <div 
                    :class="[data.value.roles?.find(r => r.id)?.name == 'admin' ? 'tw-text-fuchsia-500 tw-bg-fuchsia-100' : 'tw-text-cyan-500 tw-bg-cyan-100' ]"
                class="tw-uppercase tw-text-xs tw-font-semibold tw-w-fit tw-text-center tw-mx-auto tw-px-2 tw-py-1">
                    {{ data.value.roles?.find(r => r.id)?.name  }}
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