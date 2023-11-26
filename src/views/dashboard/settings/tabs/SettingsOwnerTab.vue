<template lang="">
    <div>
        <form action="#">
            <div class="tw-grid tw-gap-4 sm:tw-grid-cols-2 sm:tw-gap-6">

                <div class="md:tw-col-span-1">
                    <label
                        for="name"
                        class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >Nom de l'entreprise</label
                    >
                    <input
                        type="text"
                        v-model="name"
                        id="name"
                        class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Tapez le nom de l'entreprise"
                        required=""
                    />
                </div>

                
                <div class="md:tw-col-span-1">
                    <label
                    for="siege"
                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >Siège Social</label
                    >
                    <input
                    type="text"
                    v-model="siege"
                    id="siege"
                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Tapez le Siège Social"
                    required=""
                    />
                </div>

                <div class="md:tw-col-span-1">
                    <label
                    for="ice"
                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                    >ICE</label
                    >
                    <input
                    type="text"
                    v-model="ice"
                    id="ice"
                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Tapez le ICE"
                    required=""
                    />
                </div>

              <div class="md:tw-col-span-1">
                <label
                  for="type"
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Type de Restauration</label
                >
                <select
                  v-model="type"
                  id="type"
                  class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tapez le nom d'utilisateur"
                >
                  <option value="" disabled>Choisi un type</option>
                </select>
              </div>

            </div>

            <div class="tw-flex tw-items-center tw-justify-end tw-w-full tw-mt-5">
                <button type="button" class="tw-text-white tw-bg-primary-700 hover:tw-bg-primary-800 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800">Enregistrer</button>

            </div>
          </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const name = ref('');
const siege = ref('');
const ice = ref('');
const type = ref('');

</script>
<style lang="">
    
</style>