<template>
    <div class="tw-flex tw-items-center tw-gap-2 tw-w-fit">
        <TablesTableActionsDelete :data="props.data" />

        
    </div>
</template>
<script setup>
import TablesTableActionsDelete from './TablesTableActionsDelete'
import { defineProps } from 'vue';

const props = defineProps(['data']);

</script>