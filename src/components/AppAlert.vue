<template>
    <teleport to='body' >
        <v-slide-y-reverse-transition>
            <div v-show="store.active" class="pa-2 tw-fixed tw-w-full tw-flex tw-justify-end tw-pointer-events-none tw-bottom-0 tw-right-0 tw-z-[60000]">
                    <div class="tw-min-h-[40px] tw-pointer-events-auto tw-text-white tw-shadow-lg tw-flex tw-items-start tw-gap-2 tw-rounded md:tw-w-[400px] tw-w-[95%] tw-mx-auto md:tw-mx-0 tw-max-w-full tw-py-2 tw-px-2" :class="[type.bg]">
                        <div class="tw-grid tw-place-items-center tw-pt-1">
                            <icon class="tw-text-xl" :icon="type.icon"/>
                        </div>
                        <div class="tw-flex tw-flex-col tw-justify-center">
                            <h1 class="tw-text-white tw-text-md tw-font-bold">{{ type.title }}</h1>
                            <p class="tw-text-white tw-text-[14px] tw-font-medium">{{ store.alert.body }}</p>
                        </div>
                    </div>
            </div>
        </v-slide-y-reverse-transition>
    </teleport>
</template>

<script setup>
import useAlertStore from '@/stores/alertStore'
import { computed } from 'vue';

const variants = {
                'success': {
                    title: 'Success',
                    bg: 'dark:tw-bg-green-500 tw-bg-emerald-500',
                    icon: 'ph:check-circle'
                },
                'info': {
                    title: 'Info',
                    bg: 'dark:tw-bg-blue-400 tw-bg-blue-500',
                    icon: 'ph:info'
                },
                'danger': {
                    title: 'Error',
                    bg: 'dark:tw-bg-red-500 tw-bg-red-500',
                    icon: 'ph:x-circle'
                },
                'warning': {
                    title: 'Warning',
                    bg: 'dark:tw-bg-amber-500 tw-bg-amber-500',
                    icon: 'ph:warning-circle'
                },
            }

const types = ['success', 'info', 'danger', 'warning'];

const store = useAlertStore();

const type = computed(() => {
    return types.includes(store.alert.type.toLowerCase()) 
            ? variants[store.alert.type.toLowerCase()] 
            : variants['info']
})
</script>

<style>

</style>