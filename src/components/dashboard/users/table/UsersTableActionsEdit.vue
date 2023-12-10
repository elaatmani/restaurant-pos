<template>
    <div>

    <button @click="show" class="tw-p-1 tw-border tw-border-solid tw-border-transparent tw-duration-200 hover:tw-bg-white hover:tw-border-neutral-200 tw-rounded-lg">
        <icon icon="lucide:pencil-line" class="tw-text-xl tw-text-amber-500" />
    </button>

    <popup :closeable="!isLoading" :visible="visible" @cancel="cancel">
            <div
                class="tw-relative tw-max-w-[450px] tw-p-5 tw-w-full tw-bg-white tw-rounded-md tw-mx-auto tw-border tw-border-solid tw-border-gray-400">
                <h1 class="tw-text-lg tw-font-semibold tw-text-center">Modifier un utilisateur</h1>

                <form action="#">
                    <div class="tw-grid tw-gap-4 sm:tw-grid-cols-2 sm:tw-gap-3">
                        <!-- <div class="sm:tw-col-span-2">
                            <label for="role"
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Rôle</label>
                            <select v-model="user.role" id="role"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tapez le nom d'utilisateur">
                                <option value="" disabled>Choisi un rôle</option>
                                <option value="cachier">Caissier</option>
                            </select>
                            <span v-if="errors.role" class="tw-text-rose-500 tw-text-xs tw-font-semibold">{{ errors.role }}</span>
                        </div> -->

                        <div class="sm:tw-col-span-2">
                            <label for="name"
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Nom
                                Complete</label>
                            <input type="text" v-model="user.name" id="name"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Tapez le nom d'utilisateur" required="" />
                            <span v-if="errors.name" class="tw-text-rose-500 tw-text-xs tw-font-semibold">{{ errors.role }}</span>

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

                    <div class="tw-flex tw-items-center tw-justify-end tw-w-full tw-mt-5 tw-gap-3">
                        <button type="button"
                            @click="cancel"
                            :disabled="isLoading"
                            class="tw-text-gray-700 tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-bg-gray-50 hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-gray-600 dark:hover:tw-bg-gray-700 focus:tw-outline-none"
                            >
                            <span>
                                Annuler
                            </span>
                        </button>
                        <button type="button"
                            @click="update"
                            :disabled="isLoading"
                            class="tw-text-white tw-flex tw-items-center tw-justify-center tw-bg-primary-700 hover:tw-bg-primary-800 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800"
                            >
                            <icon v-if="isLoading" icon="line-md:loading-twotone-loop" class="tw-absolute tw-text-xl" />
                            <span :class="[isLoading && 'tw-invisible']">
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
import { ref, reactive, defineProps } from "vue";
import useAlert from '@/composables/useAlert';
import useStore from '@/stores/dashboard/userStore'
import User from "@/api/dashboard/User";

const props = defineProps(['data']);
const store = useStore();
const visible = ref(false);
const isLoading = ref(false);
let user = reactive({
    name: '',
    email: '',
    password: '',
    role: ''
});

const errors = reactive({});

const update = async () => {
    if(!isValid()) return false;
    isLoading.value = true;
    if(user.password) {
        user.password_confirmation = user.password;
    }
    await User.update(user.id, user)
    .then(
        res => {
            if(res.data.status == 200) {
                store.updateUser(props.data.id, res.data.result);
                useAlert('Utilisateur a été modifié avec success');
                visible.value = false;
            }
        }
    )
    isLoading.value = false;
}

const isValid = () => {
    // reset errors
    clear();

    if(!user.name) {
        errors.name = 'this field is required !';
    }
    
    if(!user.email) {
        errors.email = 'this field is required !';
    }


    return !!user.email 
        && !!user.name 

}

const cancel = () => {
    visible.value = false;
};

const show = () => {
    user = reactive(JSON.parse(JSON.stringify(props.data))) 
    user.role = user.roles?.map(r => r.id);
    visible.value = true
};

const clear = () => {
    Object.keys(errors).forEach(k => errors[k] = '');
}
</script>
<style lang="">
    
</style>