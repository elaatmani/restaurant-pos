<template>
    <div ref="container" class="tw-relative">
        <button @click="isActive = !isActive"
            class="tw-bg-white tw-p-1.5 tw-border tw-border-gray-200 !tw-border-solid tw-rounded-lg hover:tw-bg-gray-50 hover:tw-shadxow-md hover:tw-shadow-neutral-200 tw-duration-200">
            <icon class="tw-text-2xl tw-text-neutral-600 tw-duration-200" icon="solar:user-broken" />
        </button>

        <transition class="tw-duration-200" enter-from-class="tw-translate-y-[10px]  tw-opacity-0"
            leave-to-class="tw-translate-y-[10px]  tw-opacity-0">
            <div v-if="isActive">

                <div @click="isActive = false"
                    class="tw-w-[150px] tw-absolute tw-right-0 -tw-bottom-1 tw-py-1 tw-translate-y-full tw-bg-white tw-rounded-lg tw-border tw-border-solid tw-border-gray-200 tw-border-b-2">
                    <button @click="logout" class="tw-flex tw-items-center tw-gap-2 tw-text-red-600 tw-p-3 tw-py-2 tw-w-full hover:tw-bg-gray-100 tw-duration-200">
                        <icon class="tw-text-xl" icon="ic:twotone-logout" />
                        <span class="tw-text-sm">Logout</span>
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



const isActive = ref(false);
const container = ref(null);
const router = useRouter();
const authStore = useAuthStore();

const logout = () => {
    authStore.logout();
    router.push({ name: 'login' })

}

onClickOutside(container, () => isActive.value = false);
</script>
  
<style></style>