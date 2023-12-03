<template>
    <div>
        <button @click="show" class="tw-p-1 tw-border tw-border-solid tw-border-transparent tw-duration-200 hover:tw-bg-white hover:tw-border-neutral-200 tw-rounded-lg">
            <icon icon="lucide:pencil-line" class="tw-text-xl tw-text-amber-500" />
        </button>

        <popup :closeable="true" :visible="visible" @cancel="cancel">
            <div
                class="tw-relative tw-max-w-[450px] tw-p-5 tw-w-full tw-bg-white tw-rounded-md tw-mx-auto tw-border tw-border-solid tw-border-gray-400">
                <h1 class="tw-text-lg tw-font-semibold tw-text-center">Modifier une variation</h1>

                <form action="#">
                    <div class="tw-grid tw-gap-4 sm:tw-grid-cols-2 sm:tw-gap-3">

                        <div class="sm:tw-col-span-2">
                            <label for="size"
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Size</label>
                            <input type="text" v-model="variation.item_size" id="size"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tapez le nom d'utilisateur" required="" />
                            <span v-if="errors.item_size" class="tw-text-rose-500 tw-text-xs tw-font-semibold">{{ errors.item_size }}</span>
                        </div>

                        <div class="sm:tw-col-span-2">
                            <label for="size"
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Prix</label>
                            <input type="number" v-model="variation.item_price" id="size"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tapez le nom d'utilisateur" required="" />
                            <span v-if="errors.item_price" class="tw-text-rose-500 tw-text-xs tw-font-semibold">{{ errors.item_price }}</span>
                        </div>


                        </div>

                    <div class="tw-flex tw-items-center tw-justify-end tw-w-full tw-mt-5 tw-gap-2">
                        <button @click="visible = false" type="button"
                            class="tw-border-solid tw-duration-200 tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-w-fit tw-h-fit tw-py-2.5 dark:tw-bg-gray-800 dark:tw-text-white dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700">
                            Annuler
                        </button>

                        <button type="button"
                            @click="update"
                            :disabled="!variation.item_price || !variation.item_size"
                            :class="[(!variation.item_price || !variation.item_size) && '!tw-bg-gray-200 !tw-text-gray-500']"
                            class="tw-text-white tw-flex tw-items-center tw-justify-center tw-bg-primary-700 hover:tw-bg-primary-800 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800"
                            >
                            <span>
                                Modifier
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </popup>

    </div>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits } from "vue";

const visible = ref(false);
const props = defineProps(['data']);
const variation = reactive({...props.data});
const errors = reactive({});
const emit = defineEmits(['update'])

const update = () => {
    emit('update', variation);
    cancel();
}

const show = () => {
    visible.value = true;
}

const cancel = () => {
    visible.value = false;
}


</script>