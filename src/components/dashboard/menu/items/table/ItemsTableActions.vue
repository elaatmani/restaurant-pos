<template>
    <div class="tw-flex tw-items-center tw-gap-2 tw-w-fit">
        <router-link :to="{ name: 'dashboard.items.update', params: { id: props.data.id } }" class="tw-p-1 tw-border tw-border-solid tw-border-transparent tw-duration-200 hover:tw-bg-white hover:tw-border-neutral-200 tw-rounded-lg">
            <icon icon="lucide:pencil-line" class="tw-text-xl tw-text-amber-500" />
        </router-link>
        <!-- <MenusTableActionsEdit :data="props.data" /> -->
        <ItemsTableActionsDelete :data="props.data" />

        
    </div>
</template>
<script setup>
// import MenusTableActionsEdit from './MenusTableActionsEdit'
import ItemsTableActionsDelete from './ItemsTableActionsDelete'
import { defineProps } from 'vue';

const props = defineProps(['data']);

</script>