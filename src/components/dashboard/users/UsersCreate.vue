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
                            <label for="role"
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Rôle</label>
                            <select v-model="user.role" id="role"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tapez le nom d'utilisateur">
                                <option value="" disabled>Choisi un rôle</option>
                                <option value="cachier">Caissier</option>
                            </select>
                            <span v-if="errors.role" class="tw-text-rose-500 tw-text-xs tw-font-semibold">{{ errors.role }}</span>
                        </div>

                        <div class="sm:tw-col-span-2">
                            <label for="name"
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Nom
                                Complete</label>
                            <input type="text" v-model="user.name" id="name"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tapez le nom d'utilisateur" required="" />
                            <span v-if="errors.name" class="tw-text-rose-500 tw-text-xs tw-font-semibold">{{ errors.name }}</span>

                        </div>

                        <div class="sm:tw-col-span-2">
                            <label for="email"
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Email</label>
                            <input type="email" v-model="user.email" id="email"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tapez l'email d'utilisateur" required="" />
                            <span v-if="errors.email" class="tw-text-rose-500 tw-text-xs tw-font-semibold">{{ errors.email }}</span>

                        </div>

                        <div class="sm:tw-col-span-2">
                            <label for="password"
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Password</label>
                            <input type="text" v-model="user.password" id="password"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tapez le mot de passe" required="" />
                            <span v-if="errors.password" class="tw-text-rose-500 tw-text-xs tw-font-semibold">{{ errors.password }}</span>

                        </div>

                    </div>

                    <div class="tw-flex tw-items-center tw-justify-end tw-w-full tw-mt-5 tw-gap-2">
                        <button @click="visible = false" type="button"
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
                </form>
            </div>
        </popup>

    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import useAlert from '@/composables/useAlert';
import useStore from '@/stores/dashboard/userStore'

const store = useStore();
const visible = ref(false);
const isLoading = ref(false);
const user = reactive({
    name: '',
    email: '',
    password: '',
    role: ''
});

const errors = reactive({});

const create = () => {
    if(!isValid()) return false;

    isLoading.value = true;
    setTimeout(() => {
        isLoading.value = false;
        visible.value = false;
        const id = Date.now().toString();

        store.addUser({...user, id: id.substring(id.length - 4)});
        useAlert('Utilisateur a été ajouté avec success');
        clear();
    }, 3000)
}

const isValid = () => {
    // reset errors
    Object.keys(errors).forEach(k => errors[k] = '');

    if(!user.name) {
        errors.name = 'this field is required !';
    }
    
    if(!user.email) {
        errors.email = 'this field is required !';
    }

    if(!user.role) {
        errors.role = 'this field is required !';
    }

    if(!user.password) {
        errors.password = 'this field is required !';
    }


    return !!user.password 
        && !!user.email 
        && !!user.name 
        && !!user.role

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
    Object.keys(user).forEach(k => user[k] = '');
}
</script>