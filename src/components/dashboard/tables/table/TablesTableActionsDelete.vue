<template>
    <div>
        <button @click="visible = true" class="tw-p-1 tw-border tw-border-solid tw-border-transparent tw-duration-200 hover:tw-bg-white hover:tw-border-neutral-200 tw-rounded-lg">
            <icon icon="mynaui:trash" class="tw-text-xl tw-text-rose-500" />
        </button>

        <popup :closeable="!loading" :visible="visible" @cancel="visible = false">
            <div
                class="tw-relative tw-max-w-[450px] tw-w-full tw-bg-white tw-overflow-hidden tw-rounded-md tw-mx-auto tw-border tw-border-solid tw-border-gray-400">
                <h1 class="tw-text-lg tw-font-semibold tw-p-5 tw-bg-gray-100">Vous êtes sûr de vouloir supprimer cette table ?</h1>

                <div class="tw-flex tw-justify-end tw-items-center tw-col-span-12 tw-gap-2 tw-p-5 ">
                    <button @click="visible = false" type="button"
                        class="tw-border-solid tw-duration-200 tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-8 tw-w-fit tw-h-fit tw-py-2.5 dark:tw-bg-gray-800 dark:tw-text-white dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700">
                        Annuler
                    </button>
                    <button @click="destroy" type="button" :class="[loading && '!tw-bg-red-400 tw-cursor-not-allowed']"
                        class="tw-relative tw-flex tw-gap-2 tw-items-center tw-justify-center tw-dura tw-text-white tw-bg-red-500 hover:tw-bg-red-600 tw-shadow-md hover:tw-shadow-lg tw-duration-200 focus:tw-ring-4 focus:tw-ring-red-300 tw-font-medium tw-rounded-md tw-text-sm tw-px-8 tw-w-fit tw-py-2.5 dark:tw-bg-red-600 dark:hover:tw-bg-red-700 focus:tw-outline-none dark:focus:tw-ring-red-800">
                        <icon v-if="loading" icon="line-md:loading-twotone-loop" class="tw-absolute tw-text-xl" />

                        <span :class="[loading && '!tw-opacity-0']">Supprimer</span>
                    </button>
                </div>
            </div>
        </popup>
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import useAlert from '@/composables/useAlert'
import useTableStore from '@/stores/dashboard/tableStore';
import Table from '@/api/dashboard/Table'

const props =  defineProps(['data']);
const loading = ref(false);
const visible = ref(false);
const store = useTableStore();


const destroy = async () => {
    loading.value = true

    await Table.delete(props.data.id)
    .then(
        res => {
            if(res.data.status == 200) {
                store.deleteTable(props.data.id);
                useAlert('Table a été supprimé');
                visible.value = false;
            }
        },
        err => {
            useAlert('Something went wrong', 'danger');
            console.log(err)
        }
    )
    loading.value = false;
}
</script>

