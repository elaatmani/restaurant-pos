<template>
  <div>
    <button @click="showPopup = true" class="tw-py-1 tw-px-0 tw-gap-1 tw-border-solid tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-bg-gray-50 tw-duration-200">
        <icon class="tw-text-gray-500 tw-text-2xl" icon="mingcute:transfer-fill" />
        <span class="tw-text-xs">Transfére de table</span>
    </button>

    <popup :visible="showPopup" @cancel="showPopup = false" >
        <div
            class="tw-p-5 tw-relative tw-mx-auto tw-w-[95%] md:tw-max-w-[800px]  dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid tw-rounded-tr-none dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
        >
            <div class="tw-mb-5 tw-flex tw-justify-between tw-items-center">
                <h1 class="tw-font-medium tw-text-gray-700 tw-text-lg">Selectionez une table</h1>
                <button @click="setTable(null)" class="tw-px-2 tw-py-1 tw-rounded-md tw-bg-red-500 tw-text-white">
                    Supprimer la table
                </button>
            </div>

            <div class="tw-grid tw-grid-cols-5 tw-gap-5">
                <button :disabled="[3, 5].includes(t)"  @click="setTable(t)" v-for="t in tables" :key="t" :class="[t == tableId && '!tw-bg-amber-800 !tw-text-white', [3, 5].includes(t) && 'tw-bg-rose-200 tw-text-gray-700 after:tw-px-2 after:tw-py-1 after:!tw-block after:tw-bg-rose-500 after:tw-text-white after:tw-absolute after:tw-top-0 after:tw-right-0 after:tw-text-xs after:tw-rounded-bl']" class="after:tw-content-['Réservé'] after:tw-hidden tw-relative tw-text-gray-500 tw-overflow-hidden tw-bg-gray-100 hover:tw-shadow tw-duration-200 tw-cursor-pointer tw-aspect-square tw-flex tw-items-center tw-justify-center tw-rounded">
                    <span class="tw-font-bold">Table {{t}}</span>

                    <div class="tw-absolute tw-bottom-0 tw-right-0 tw-p-3">

                    </div>
                </button>
            </div>
        </div>
    </popup>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showPopup = ref(false);
const tableId = ref(3);
const tables = 10;

const setTable = (id) => {
  console.log(id);
  showPopup.value = false;
  tableId.value = id;
}

</script>

<style>

</style>