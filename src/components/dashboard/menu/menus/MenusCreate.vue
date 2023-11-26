<template>
    <div>
        <button @click="show" type="button"
            class="tw-text-white tw-bg-primary-700 hover:tw-bg-primary-800 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800">Ajouter</button>

        <popup :closeable="!isLoading" :visible="visible" @cancel="cancel">
            <div
                class="tw-relative tw-max-w-[450px] tw-p-5 tw-w-full tw-bg-white tw-rounded-md tw-mx-auto tw-border tw-border-solid tw-border-gray-400">
                <h1 class="tw-text-lg tw-font-semibold tw-text-center">Ajouter un utilisateur</h1>

                <form action="#">
                    <div class="tw-grid tw-gap-4 sm:tw-grid-cols-2 sm:tw-gap-3">

                        <div class="sm:tw-col-span-2">
                            <label for="menu_name"
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Nom</label>
                            <input type="text" v-model="menu.menu_name" id="menu_name"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tapez le nom d'utilisateur" required="" />
                            <span v-if="errors.menu_name" class="tw-text-rose-500 tw-text-xs tw-font-semibold">{{ errors.menu_name }}</span>

                        </div>

                        <div class="sm:tw-col-span-2">
                            <label for="image_url"
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Image</label>
                            <input  type="file" @change="handleImageChange" id="image_url"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tapez l'email d'utilisateur" required="" />
                            <span v-if="errors.image_url" class="tw-text-rose-500 tw-text-xs tw-font-semibold">{{ errors.image_url }}</span>

                        </div>

                        <div class="sm:tw-col-span-2" v-show="show_image">
                            <img class="tw-max-w-full tw-object-contain" :ref="el => image_file = el"
                            />
                        </div>

                        </div>

                    <div class="tw-flex tw-items-center tw-justify-end tw-w-full tw-mt-5">
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
                </form>
            </div>
        </popup>

    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import useAlert from '@/composables/useAlert';
import Menu from '@/api/dashboard/Menu'
import useMenuStore from '@/stores/dashboard/menuStore'

const store = useMenuStore();
const visible = ref(false);
const image_file = ref(null);
const show_image = ref(false);
const isLoading = ref(false);
const menu = reactive({
    menu_name: '',
    slug: '',
    image_url: null
});

const errors = reactive({});

const create = async () => {
    if(!isValid()) return false;

    isLoading.value = true;
    await Menu.create({...menu, slug: menu.menu_name})
    .then(
        res => {
            store.addMenu(res.data.result);
            useAlert('Menu a été ajouté avec success');
            visible.value = false;

        },
        err => {
            if(err?.response?.data?.errors) {
                for (const e in err?.response?.data?.errors) {
                    errors[e] = err?.response?.data?.errors[e][0];
                }
            }
        }
    );
    isLoading.value = false;

}

const isValid = () => {
    // reset errors
    Object.keys(errors).forEach(k => errors[k] = '');

    if(!menu.menu_name) {
        errors.menu_name = 'this field is required !';
    }

    return !!menu.menu_name
}

const handleImageChange = (event) => {
    const file = event.target.files[0];
    menu.image_url = file;
    
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {

            image_file.value.src = this.result;
            show_image.value = true
        });
        reader.readAsDataURL(file);
    }
}

const cancel = () => {
    visible.value = false;
};

const show = () => {
    clear();
    visible.value = true
};

const clear = () => {
    Object.keys(errors).forEach(k => errors[k] = '');
    Object.keys(menu).forEach(k => menu[k] = '');
}
</script>