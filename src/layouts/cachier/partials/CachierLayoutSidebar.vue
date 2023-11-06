<template>
  <v-navigation-drawer
    :rail="false"
    location="left"
    :absolute="false"
    class="!tw-top-0 !tw-fixed"
    :touchless="true"
    v-model="drawerValue"
    width="350"
  >
    <CachierAccount />

    <v-list class="tw-pb-16">

      <v-list-item>
        <router-link :class="[route.name == 'cachier.index' && '!tw-border-amber-500']" :to="{ name: 'cachier.index' }" class="tw-flex tw-items-center tw-gap-3 tw-text-neutral-700 hover:tw-border-gray-300 tw-duration-200 tw-py-2 tw-px-2 tw-rounded-md tw-border tw-border-solid">
            <icon class="tw-text-3xl tw-text-amber-500" icon="ic:round-dashboard" />
            <span class="tw-text-lg tw-font-medium t">Acceuil</span>
        </router-link>
      </v-list-item>

      <v-list-item>
        <router-link :class="[route.name == 'ticket.new' && '!tw-border-gray-500']" :to="{ name: 'ticket.new' }" class="tw-flex tw-items-center tw-gap-3 tw-text-neutral-700 hover:tw-border-gray-300 tw-duration-200 tw-py-2 tw-px-2 tw-rounded-md tw-border tw-border-solid">
            <icon class="tw-text-3xl tw-text-gray-600" icon="solar:ticket-sale-bold" />
            <span class="tw-text-lg tw-font-medium t">Ajouter un ticket</span>
        </router-link>
      </v-list-item>

      <v-list-item>
        <router-link :class="[route.name == 'cachier.tickets' && '!tw-border-blue-500']" :to="{ name: 'cachier.tickets' }" class="tw-flex tw-items-center tw-gap-3 tw-text-neutral-700 hover:tw-border-gray-300 tw-duration-200 tw-py-2 tw-px-2 tw-rounded-md tw-border tw-border-solid">
            <icon class="tw-text-3xl tw-text-blue-500" icon="ep:list" />
            <span class="tw-text-lg tw-font-medium t">Liste tickets</span>
        </router-link>
      </v-list-item>

      <v-list-item>
        <router-link :class="[route.name == 'cachier.movements' && '!tw-border-green-500']" :to="{ name: 'cachier.movements' }" class="tw-flex tw-items-center tw-gap-3 tw-text-neutral-700 hover:tw-border-gray-300 tw-duration-200 tw-py-2 tw-px-2 tw-rounded-md tw-border tw-border-solid">
            <icon class="tw-text-3xl tw-text-green-500" icon="mdi:account-cash" />
            <span class="tw-text-lg tw-font-medium ">Mouvements d'argent</span>
        </router-link>
      </v-list-item>

      <v-list-item>
        <router-link :class="[route.name == 'cachier.cash-registers' && '!tw-border-purple-500']" :to="{ name: 'cachier.cash-registers' }" class="tw-flex tw-items-center tw-gap-3 tw-text-neutral-700 hover:tw-border-gray-300 tw-duration-200 tw-py-2 tw-px-2 tw-rounded-md tw-border tw-border-solid">
            <icon class="tw-text-3xl tw-text-purple-500" icon="mdi:cash-register" />
            <span class="tw-text-lg tw-font-medium ">La caisse</span>
        </router-link>
      </v-list-item>

    </v-list>

    <div class="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-p-4">
      <cachier-logout />
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { useRoute } from "vue-router";
import CachierAccount from "./sidebar/CachierAccount.vue";
import CachierLogout from "./sidebar/CachierLogout.vue";

const route = useRoute();
const props = defineProps({
  drawer: {
    required: false,
    default: true,
  },
});
const emit = defineEmits(["update:drawer"]);

const drawerValue = computed({
  get: () => props.drawer,
  set: (v) => emit("update:drawer", v),
});
</script>

<style>
</style>