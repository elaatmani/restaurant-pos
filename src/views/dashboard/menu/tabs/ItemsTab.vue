<template>
    <div>
            <div class="tw-flex tw-items-center tw-justify-end tw-gap-5">
                <router-link 
                    :to="{ name: 'dashboard.items.create' }"
                    class="tw-text-white tw-bg-primary-700 hover:tw-bg-primary-800 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800"
                >Ajouter</router-link>
            </div>

            <div class="tw-my-3"></div>
            <ItemsTable :key="items.length" :data="items" :loading="loading" />
    </div>


</template>
<script setup>
import ItemsTable from '@/components/dashboard/menu/items/table/ItemsTable'
import menuStore from '@/stores/dashboard/menuStore';
import Item from '@/api/dashboard/Item';
import { computed, ref } from 'vue';

const store = menuStore();
const loading = ref(false);
const items = computed(() => store.items);

const getItems = async () => {
    loading.value = true;
    await Item.items()
    .then(
        res => {
            if(res.data.status == 200) {
                store.setItems(res.data.result)
            }
        }
    );
    loading.value = false;
}

getItems();
</script>