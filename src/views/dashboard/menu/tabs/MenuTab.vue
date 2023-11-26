<template>
    <div>
            <div class="tw-flex tw-items-center tw-justify-end tw-gap-5">
                <MenusCreate />
            </div>

            <div class="tw-my-3"></div>
            <MenusTable :key="menus.length" :data="menus" :loading="loading" />
    </div>


</template>
<script setup>
import MenusTable from '@/components/dashboard/menu/menus/table/MenusTable'
import MenusCreate from '@/components/dashboard/menu/menus/MenusCreate';
import menuStore from '@/stores/dashboard/menuStore';
import { ref, computed, onMounted } from 'vue';
import Menu from '@/api/dashboard/Menu';

const store = menuStore();
const loading = ref(true);

const menus = computed(() => store.menus);

const getMenus = async () => {
    if(store.isMenusFetched) {
        loading.value = false;
        return false;
    }

    loading.value = true;
    await Menu.menus()
    .then(
        res => {
            if(res.data.status == 200) {
                store.setMenus(res.data.result);
                store.setIsMenusFetched(true);
            }
        },
        err => {
            console.log(err)
        }
    )
    loading.value = false;
}

onMounted(() => {
    getMenus();
})
</script>