<template>
    <tr
    class="hover:tw-bg-gray-50"
    :class="[]"
  >
    <td class="tw-px-4 tw-py-2 tw-w-5 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white">
          {{ movement.id }}
        </h2>
      </div>
    </td>

    <td class="tw-px-4 tw-py-2 tw-w-10 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        {{ movement.amount }} {{ currency }}
      </div>
    </td>

    <td class="tw-px-4 tw-w-10 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div class="tw-w-fit">
        <span v-if="movement.type == 'plus'" class="tw-p-2 tw-block tw-w-fit tw-bg-green-100 tw-text-green-600 tw-rounded-lg">
          <icon class="tw-text-xl" icon="ic:round-plus" />
        </span>
        <span v-if="movement.type == 'minus'" class="tw-p-2 tw-block tw-w-fit tw-bg-rose-100 tw-text-rose-600 tw-rounded-lg">
          <icon class="tw-text-xl" icon="ic:round-minus" />
        </span>
      </div>
    </td>

    <td class="tw-px-2 tw-py-2 tw-w-48   tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div class="tw-max-w-48 tw-truncate">
        {{ movement.description }}
      </div>
    </td>

    <td class="tw-px-4 tw-py-2 tw-w-5 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <h2
          class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-flex tw-flex-col"
        >
          <!-- {{ getDate(movement.created_at) }} -->
          <p>{{ moment(movement.created_at).format('MMMM Do YYYY') }}</p>
          <p>{{ moment(movement.created_at).format('h:mm:ss a') }}</p>
        </h2>
      </div>
    </td>

    <td  class="tw-px-4 tw-py-2 tw-w-5 tw-text-sm tw-whitespace-nowrap">
      <div>
        <MovementTableActions
          @update="(newItem) => $emit('update', newItem)"
          :movement="movement"
        />
      </div>
    </td>
  </tr>
</template>

<script setup>
import MovementTableActions from './MovementTableActions.vue';
import moment from 'moment';
import { currency } from '@/config/app';
import { defineProps, toRefs } from 'vue';

const props = defineProps(['movement']);

const { movement } = toRefs(props)

</script>

<style>

</style>