<template>
    <div class="tw-flex tw-items-center tw-gap-2 tw-w-fit">
        <UsersTableActionsEdit :data="props.data" />
        <UsersTableActionsDelete :data="props.data" />

        
    </div>
</template>
<script setup>
import UsersTableActionsEdit from './UsersTableActionsEdit'
import UsersTableActionsDelete from './UsersTableActionsDelete'
import { defineProps } from 'vue';

const props = defineProps(['data']);

console.log(props.data)
</script>