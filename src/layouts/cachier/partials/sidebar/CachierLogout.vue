<template>
    <div>
        <button @click="cashRegister.visible = true" class="tw-w-full tw-flex tw-items-center tw-gap-3 tw-text-neutral-700 tw-border-red-400 tw-duration-200 tw-py-2 tw-px-2 tw-rounded-md tw-border tw-border-solid">
            <icon class="tw-text-3xl tw-text-red-500" icon="solar:logout-2-bold" />
            <span class="tw-text-lg tw-font-medium ">Se déconnecter</span>
        </button>

        <CashRegisterNewEntry ref="cashRegister" type="out" />
    </div>
</template>

<script setup>
import CashRegisterNewEntry from '@/components/cachier/cash-registers/CashRegisterNewEntry';
import { ref } from 'vue';

const cashRegister = ref(null);

</script>

<style>

</style>