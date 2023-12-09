<template>
  <div>
    <div :class="status.style" class="tw-text-xs tw-py-1 tw-px-2 tw-w-[100px] tw-text-center">
        {{status.label}}
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, toRef } from 'vue';

const props = defineProps(['order']);
const order = toRef(props, 'order');
const status = ref(null);

const statuses = [
    {
        "id": "COMPLETED",
        "label": "Complèté",
        "style": "!tw-text-emerald-600 !tw-bg-emerald-100"
    },
    {
        "id": "RETURNED",
        "label": "Retourné",
        "style": "!tw-text-red-600 !tw-bg-red-100"
    },
    {
        "id": "PENDING",
        "label": "En attente",
        "style": "!tw-text-amber-600 !tw-bg-amber-100"
    }
]

const getStatus = () => {
    status.value = statuses.find(s => s.id == order.value.order_status);
}

getStatus()

</script>

<style>

</style>