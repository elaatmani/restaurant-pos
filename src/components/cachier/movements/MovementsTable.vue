<template>
  <div>
  <div class="tw-flex tw-flex-col">
        <div class="tw-overflow-x-auto">
            <div class="tw-inline-block tw-min-w-full tw-align-middle">
                <div class="tw-border tw-overflow-auto tw-border-gray-200 darkx:tw-border-gray-700 md:tw-rounded-lg">
                    <table class="tw-min-w-full tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700">
                        <thead class="tw-bg-gray-50 darkx:tw-bg-gray-800 tw-whitespace-nowrap">
                            <tr>
                                <th scope="col" class="tw-py-3.5 tw-px-4 tw-w-5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    <span>ID</span>
                                </th>
                                
                                <th scope="col" class="tw-px-3 tw-w-12 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Montant
                                </th>
                                <th scope="col" class="tw-px-3 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Type
                                </th>
                                <th scope="col" class="tw-px-3 tw-w-10 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Description
                                </th>

                                <th scope="col" class="tw-py-3.5 tw-px-4  tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    <button  class="tw-flex tw-items-center tw-gap-x-3 focus:tw-outline-none">
                                        <span>Effectué le</span>
                                    </button>
                                </th>
                                <th scope="col" class="tw-py-3.5 tw-px-4 tw-w-[50px] tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">

                                </th>
                                
                            </tr>
                        </thead>

                        <tbody class="tw-bg-white tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700 darkx:tw-bg-gray-900">
                          <MovementTableRow  @update="newItem => $emit('update', newItem)" :all="all" :index="index" v-for="(movement, index, all) in movements" :key="movement.id" :movement="movement" />
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script setup>
import { toRefs, defineProps } from 'vue';
import MovementTableRow from './MovementTableRow.vue';

const props = defineProps(['movements']);

const { movements } = toRefs(props)
</script>

<style>

</style>