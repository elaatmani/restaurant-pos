<template>
    <div ref="container" class="tw-relative">
        <button @click="isActive = !isActive"
            class="tw-bg-white tw-p-1.5 tw-border tw-border-gray-200 !tw-border-solid tw-rounded-lg hover:tw-bg-gray-50 hover:tw-shadxow-md hover:tw-shadow-neutral-200 tw-duration-200">
            <icon class="tw-text-2xl tw-text-neutral-600 tw-duration-200" icon="solar:user-broken" />
        </button>

        <transition class="tw-duration-200" enter-from-class="tw-translate-y-[10px]  tw-opacity-0"
            leave-to-class="tw-translate-y-[10px]  tw-opacity-0">
            <div v-if="isActive">

                <div
                    class="tw-w-[190px] tw-absolute tw-right-0 -tw-bottom-1 tw-py-1 tw-translate-y-full tw-bg-white tw-rounded-lg tw-border tw-border-solid tw-border-gray-200 tw-border-b-2">
                    <button :disabled="loading" @click="logout" :class="[loading && '!tw-text-gray-500']" class="tw-flex tw-items-center tw-gap-2 tw-text-red-600 tw-p-3 tw-py-2 tw-w-full hover:tw-bg-gray-100 tw-duration-200">
                        <icon class="tw-text-xl" :icon="loading ? 'line-md:loading-twotone-loop' : 'ic:twotone-logout'" />
                        <span class="tw-text-sm">Se déconnecter</span>
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import { onClickOutside } from '@vueuse/core';
import useAuthStore from "@/stores/authStore";
import { useRouter } from "vue-router";
import Logout from "@/api/auth/Logout";



const isActive = ref(false);
const loading = ref(false);
const container = ref(null);
const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
    loading.value = true;
    await Logout.logout()
    .then(
        () => {
            authStore.logout();
            router.push({ name: 'login' })
        }
    )
    loading.value = false;
}

onClickOutside(container, () => isActive.value = false);
</script>
  
<style></style>