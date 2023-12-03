<template>
    <div class="tw-flex tw-items-center tw-gap-2 tw-w-fit">
        <ItemVariationActionsEdit @update="item => emit('update', item)" :data="props.data" />
        <ItemVariationActionsDelete @delete="emit('delete', props.data.id)" :data="props.data" />

        
    </div>
</template>
<script setup>
import ItemVariationActionsDelete from './ItemVariationActionsDelete'
import ItemVariationActionsEdit from './ItemVariationActionsEdit'
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['data']);
const emit = defineEmits(['delete', 'update']);

</script>