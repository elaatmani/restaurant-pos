<template>
    <div class="tw-bg-gray-100 tw-p-2">
        <div
        class="tw-relative tw-overflow-hidden tw-p-4 tw-bg-white dark:bg-neutral-900 tw-w-full tw-min-h-[calc(100vh-80px)]  dark:tw-shadow-none dark:tw-border dark:border-neutral-800">

        <div class=" tw-overflow-hidden tw-w-full">
            <ul
                class="tabs-nav tw-border-solid tw-border-b-neutral-100 tw-flex tw-w-full tw-overflow-auto tw-items-center tw-gap-5 tw-whitespace-nowrap tw-border-b dark:tw-border-neutral-700 dark:tw-text-neutral-100">
                <li v-for="r in tabs" :key="r.name">
                    <button type="button" @click="activeTab = r"
                        :class="activeTab.name === r.name && '!tw-border-b-2 !tw-border-primary-500 tw-text-primary-500 dark:!tw-border-white'"
                        class="tw-flex tw-items-center tw-gap-2  tw-py-3 tw-text-sm tw-border-b-2 tw-border-solid tw-border-transparent tw-duration-200 tw-font-medium hover:tw-border-black dark:hover:tw-border-white">
                        <span>{{ r.name }}</span>
                    </button>
                </li>
            </ul>
        </div>

        <div class="tw-pt-0 tw-mt-5 tw-w-full tw-h-full">
            <transition mode="out-in" class="tw-duration-200" enter-from-class="tw-translate-y-[10px]  tw-opacity-0"
                leave-to-class="tw-translate-y-[10px]  tw-opacity-0">
                <component :is="activeTab.component"></component>
            </transition>
        </div>
    </div>
    </div>
</template>



<script setup>
import { shallowRef } from "vue";
import SettingsGeneralTab from "./tabs/SettingsGeneralTab";
import SettingsOwnerTab from "./tabs/SettingsOwnerTab";
import SettingsTaxTab from "./tabs/SettingsTaxTab";
import SettingsOpeningHoursTab from "./tabs/SettingsOpeningHoursTab";

const tabs = [
    {
        name: "Général",
        component: SettingsGeneralTab
    },
    {
        name: "Propriétaire",
        component: SettingsOwnerTab
    },
    {
        name: "Taxes",
        component: SettingsTaxTab
    },
    {
        name: "Opening Hours",
        component: SettingsOpeningHoursTab
    },
];

let activeTab = shallowRef(tabs[0]);
</script>

<style scoped>
.tabs-nav::-webkit-scrollbar {
    width: 0;
    height: 0;
}
</style>
