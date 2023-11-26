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
                    class="tw-w-[150px] tw-h-[200px] tw-absolute tw-right-0 -tw-bottom-1 tw-translate-y-full tw-bg-white tw-rounded-lg tw-border tw-border-b-2">

                </div>
            </div>
        </transition>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import { onClickOutside } from '@vueuse/core';



const isActive = ref(false);
const container = ref(null);

onClickOutside(container, () => isActive.value = false);
</script>
  
<style></style>