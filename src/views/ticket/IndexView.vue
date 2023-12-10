<template>

    <page-loading v-if="loading" />

  <div v-else class="tw-p-5">
    <menu-list :menus="menus" />
  </div>
</template>

<script setup>
import MenuList from '@/components/ticket/MenuList.vue';
import Menu from '@/api/cashier/Menu';
import useMenuStore from '@/stores/cachier/menuStore';
import { ref, computed } from 'vue';

const loading = ref(false);
const menuStore = useMenuStore();
const menus = computed(() => menuStore.menus)

const getData = async () => {
  loading.value = true;
  await Menu.all()
  .then(
    res => {
      if(res.data.status == 200) {
        menuStore.setMenus(res.data.result)
        menuStore.setIsMenusFetched(true);
      }
    }
  )
  loading.value = false;
}

if(!menuStore.isMenusFetched) {
  getData();
}
</script>

<style>

</style>