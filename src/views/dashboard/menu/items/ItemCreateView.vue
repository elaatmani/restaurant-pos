<template>
    <div class="tw-p-2 tw-bg-gray-100 tw-min-h-[calc(100vh-80px)]">
        <div class="tw-p-4 tw-bg-white">
            <h1 class="tw-text-lg tw-font-bold tw-text-gray-600">Ajouter un élément</h1>

            <div class="tw-grid tw-gap-4 sm:tw-grid-cols-2 sm:tw-gap-4 tw-mt-5">

                <div class="md:tw-col-span-1">
                    <label
                    for="name"
                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >Nom du l'élément</label
                    >
                    <input
                    type="text"
                    v-model="item.name"
                    id="name"
                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Nom du l'élément"
                    required=""
                    />
                </div>

                <div class="md:tw-col-span-1">
                    <label
                    for="item_description"
                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >Description</label
                    >
                    <input
                    type="text"
                    v-model="item.item_description"
                    id="item_description"
                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Description"
                    required=""
                    />
                </div>

                <div class="md:tw-col-span-1">
                    <label
                    for="unit"
                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >Unité</label
                    >
                    <input
                    type="text"
                    v-model="item.unit"
                    id="unit"
                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Unité"
                    required=""
                    />
                </div>

                <div class="md:tw-col-span-1">
                    <label
                    for="unit"
                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >Menu</label
                    >
                    <select
                    type="text"
                    v-model="item.menu"
                    id="unit"
                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Unité"
                    required=""
                    >
                        <option value="" selected disabled>Sélectionner un menu</option>
                        <option v-for="m in menus" :key="m.id" :value="m.id">{{ m.menu_name }}</option>
                    </select>
                </div>
            </div>

            <div class="tw-mt-5">
                <h1 class="tw-font-medium">Variations</h1>
                
                <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-12 tw-gap-4 tw-mt-3">
                    <div class="md:tw-col-span-5">
                        <label
                        for="size"
                        class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                        >Size</label
                        >
                        <input
                        type="text"
                        v-model="variation.item_size"
                        id="size"
                        class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Size"
                        required=""
                        />
                    </div>
                    <div class="md:tw-col-span-5">
                        <label
                        for="price"
                        class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                        >Prix</label
                        >
                        <input
                        type="number"
                        v-model="variation.item_price"
                        id="price"
                        class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Size"
                        required=""
                        />
                    </div>
                    <div class="tw-flex tw-justify-end tw-items-end md:tw-col-span-2">
                        <button type="button"
                            class="tw-text-white tw-w-full tw-flex tw-items-center tw-justify-center tw-bg-primary-700 hover:tw-bg-primary-800 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800"
                            >
                            <span>
                                Ajouter
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            
                <div>
                    <div class="tw-flex tw-items-center tw-justify-end tw-w-full tw-mt-5 tw-gap-2">
                        <button type="button"
                            class="tw-border-solid tw-duration-200 tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-w-fit tw-h-fit tw-py-2.5 dark:tw-bg-gray-800 dark:tw-text-white dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700">
                            Annuler
                        </button>

                        <button type="button"
                            @click="create"
                            :disabled="isLoading"
                            class="tw-text-white tw-flex tw-items-center tw-justify-center tw-bg-primary-700 hover:tw-bg-primary-800 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800"
                            >
                            <icon v-if="isLoading" icon="line-md:loading-twotone-loop" class="tw-absolute tw-text-xl" />
                            <span :class="[isLoading && 'tw-invisible']">
                                Ajouter
                            </span>
                        </button>
                    </div>
                </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref, onMounted, computed } from 'vue';
import Menu from '@/api/dashboard/Menu'
import useMenuStore from '@/stores/dashboard/menuStore';


const item = reactive({
    name: '',
    item_description: '',
    unit: '',
    menu: '',
    item_variations: []
});

const variation = reactive({
    item_size: '',
    item_price: ''
})

const menuStore = useMenuStore();
const isLoading = ref(false)
const menus = computed(() => menuStore.menus)
const isFetching = ref(true);

const create = () => {

}

// const addVariation = () => {

// }

const getMenus = async () => {
    if(menuStore.isMenusFetched) {
        isFetching.value = false;
        return false;
    }

    isFetching.value = true;
    await Menu.menus()
    .then(
        res => {
            if(res.data.status == 200) {
                menuStore.setMenus(res.data.result);
                menuStore.setIsMenusFetched(true);

            }
        },
        err => {
            console.log(err)
        }
    )
    isFetching.value = false;

}


onMounted(() => {
    getMenus();
})
</script>