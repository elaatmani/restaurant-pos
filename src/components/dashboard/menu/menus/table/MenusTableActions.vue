<template>
    <div class="tw-flex tw-items-center tw-gap-2 tw-w-fit">
        <MenusTableActionsEdit :data="props.data" />
        <MenusTableActionsDelete :data="props.data" />

        
    </div>
</template>
<script setup>
import MenusTableActionsEdit from './MenusTableActionsEdit'
import MenusTableActionsDelete from './MenusTableActionsDelete'
import { defineProps } from 'vue';

const props = defineProps(['data']);

</script>