<template>
    <div class="tw-grid tw-grid-cols-1 tw-border-b tw-border-gray-200 tw-divide-x tw-text-sm tw-sticky  tw-top-[60px] tw-bg-white">
              <!-- <div class="tw-col-span-1 tw-flex tw-flex-col tw-gap-1 tw-p-2">
                  <span>Serveur</span>
                  <span>...</span>
              </div> -->
              <button @click="client_popup = true" class="tw-col-span-1 tw-flex tw-items-center tw-justify-between tw-p-2 hover:tw-bg-gray-50 tw-cursor-pointer tw-duration-200">
                  <span class="tw-flex tw-items-center tw-gap-1">
                      <span>Client: </span>
                      <span class="tw-text-start tw-font-medium tw-text-primary-500 tw-capitalize">{{ newClient.full_name }}</span>
                  </span>
                  <icon icon="basil:edit-outline" class="tw-text-green-500 tw-text-2xl" />
              </button>
  
              <popup :visible="client_popup" @cancel="client_popup = false">
                  <div
                      class="tw-p-5 tw-relative tw-mx-auto tw-w-[95%] md:tw-max-w-[800px]  dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid tw-rounded-tr-none dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
                  >
                      <h1 class="tw-mb-5 tw-font-medium tw-text-gray-700 tw-text-lg">Informations du client</h1>
                      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5">
                          <div>
                              <input
                                  v-model="newClient.full_name"
                                  @input="errors.client.full_name = null"
                                  type="text"
                                  placeholder="Nom complete"
                                  :class="[errors.client.full_name && '!tw-border-red-400']"
                                  class="tw-bg-gray-50 tw-text-lg tw-rounded tw-font-bold tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500"
                                  
                                  />
                          </div>
                          <div>
                              <input
                                  v-model="newClient.phone"
                                  @input="errors.client.phone = null"
                                  type="text"
                                  placeholder="Téléphone"
                                  :class="[errors.client.phone && '!tw-border-red-400']"
                                  class="tw-bg-gray-50 tw-text-lg tw-rounded tw-font-bold tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500"
                                  
                                  />
                          </div>
                          <div>
                              <input
                                  v-model="newClient.address"
                                  @input="errors.client.address = null"
                                  type="text"
                                  placeholder="Adresse"
                                  :class="[errors.client.address && '!tw-border-red-400']"
                                  class="tw-bg-gray-50 tw-text-lg tw-rounded tw-font-bold tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500"
                                  
                                  />
                          </div>
                          <div>
                              <input
                                  v-model="newClient.email"
                                  @input="errors.client.email = null"
                                  type="text"
                                  placeholder="Email"
                                  :class="[errors.client.email && '!tw-border-red-400']"
                                  class="tw-bg-gray-50 tw-text-lg tw-rounded tw-font-bold tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-primary-500 dark:focus:tw-border-primary-500"
                                  
                                  />
                          </div>
                          
                      </div>
  
                      <div class="tw-mt-7 tw-flex tw-justify-end tw-gap-2">
                          <button @click="client_popup = false" class="tw-h-fit tw-w-fit tw-px-4 tw-py-2 tw-gap-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-bg-gray-200 hover:tw-bg-gray-300 tw-duration-300 tw-text-gray-600">
                              <icon class="tw-text-xl" icon="mdi:close" />
                              <span class="tw-text-sm">Annuler</span>
                          </button>
                          <button @click="handleConfirm" class="tw-h-fit tw-w-fit tw-px-4 tw-py-2 tw-gap-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-bg-green-500 hover:tw-bg-green-600 tw-duration-300 tw-text-white">
                              <icon class="tw-text-xl" icon="mdi:check" />
                              <span class="tw-text-sm">Confirmer</span>
                          </button>
                      </div>
                  </div>
              </popup>
      </div>
  </template>
  
  <script>
  export default {
  
      data() {
          return {
              client_popup: false,
              server_popup: false,
  
              newClient: {
                  full_name: '',
                  phone: '',
                  email: '',
                  address: ''
              },
  
              errors: {
                  client: {}
              }
          }
      },
  
      computed: {
          client: {
              get() {
                  return this.$store.getters['ticket/current-client']
              },
              set(v) {
                  this.$store.dispatch('ticket/set-current-client', v)
              }
          },
      },
  
      methods: {
        //   handleConfirm() {
        //       this.$store.dispatch('ticket/set-current-client', this.newClient);
        //       this.client_popup = false;
        //   }
      }
  }
  </script>
  
  <style>
  
  </style>