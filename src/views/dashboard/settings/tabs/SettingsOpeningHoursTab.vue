<template>
    <div>
      <div class="tw-mt-2 tw-rounded tw-divide-y tw-border-y">
          <div v-for="day in days" :key="day.value" class="tw-space-x-2 tw-flex tw-items-center tw-bg-white tw-p-3">
              <span class="tw-block tw-mr-5 tw-w-[70px]">{{ day.name }}</span>
              <button @click="add(day.value)" type="button" class="tw-p-1 tw-h-[28px] tw-border tw-border-solid tw-rounded tw-flex tw-items-center tw-justify-center"><icon class="tw-text-lg tw-text-primary-500" icon="typcn:plus" /></button>
              <div v-if="openingHours[day.value]?.length > 0" class="tw-flex tw-flex-wrap tw-items-center tw-gap-2">
                  <div :key="time.id" v-for="time in openingHours[day.value]" class="tw-relative tw-p-1 tw-min-h-[28px] tw-rounded-lg tw-bg-gray-100 tw-w-fit tw-flex tw-items-center tw-gap-1">
                      <select
                          @change="update(day, time, {...time, from: {...time.from, hour: parseInt($event.target.value)} })"
                          :value="time.from.hour"
                          class="tw-w-[28px] tw-text-center tw-h-[28px] tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-p-1 tw-aspect-square dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                          <option v-for="i in 24" :key="i - 1" :value="i - 1">{{ (i - 1).toString().padStart(2, '0') }}</option>
                      </select>
                      <span>:</span>
                      <select
                          @change="update(day, time, {...time, from: {...time.from, minute: parseInt($event.target.value)} })"
                          :value="time.from.minute"
                          class="tw-w-[28px] tw-text-center tw-h-[28px] tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-p-1 tw-aspect-square dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                          <option v-for="i in 60" :key="i - 1" :value="i - 1">{{ (i - 1).toString().padStart(2, '0') }}</option>
                      </select>
                      <icon icon="pajamas:long-arrow" class="tw-text-lg tw-text-primary-500" />
                      <select
                          @change="update(day, time, {...time, to: {...time.to, hour: parseInt($event.target.value)} })"
                          :value="time.to.hour"
                          class="tw-w-[28px] tw-text-center tw-h-[28px] tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-p-1 tw-aspect-square dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                          <option v-for="i in 24" :key="i - 1" :value="i - 1">{{ (i - 1).toString().padStart(2, '0') }}</option>
                      </select>
                      <span>:</span>
                      <select
                          @change="update(day, time, {...time, to: {...time.to, minute: parseInt($event.target.value)} })"
                          :value="time.to.minute"
                          class="tw-w-[28px] tw-text-center tw-h-[28px] tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-p-1 tw-aspect-square dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                          <option v-for="i in 60" :key="i - 1" :value="i - 1">{{ (i - 1).toString().padStart(2, '0') }}</option>
                      </select>
                      <button @click="deleteTime(day.value, time.id)" class="tw-absolute tw-right-0 tw-top-0 tw-text-white tw-bg-red-500  tw-rounded-full tw-translate-x-1/2 -tw-translate-y-1/2">
                          <icon icon="ic:round-close" class="tw-text-xs" />
                      </button>
                  </div>
              </div>
              <div v-else class="tw-flex tw-items-center tw-h-[36px]">
                  <p class="tw-text-red-500 tw-font-bold">Fermé</p>
              </div>
          </div>
      </div>

      <div class="tw-flex tw-mt-4 tw-justify-end">
          <button type="button" class="tw-text-white tw-bg-primary-700 hover:tw-bg-primary-800 focus:tw-ring-4 focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 dark:tw-bg-primary-600 dark:hover:tw-bg-primary-700 focus:tw-outline-none dark:focus:tw-ring-primary-800">Enregistrer</button>
      </div>        

    </div>
  </template>
  
  <script>
  export default {
  
      data() {
          return {
              days: [
                  {
                      name: 'Lundi',
                      value: 'monday'
                  },
                  {
                      name: 'Mardi',
                      value: 'tuesday'
                  },
                  {
                      name: 'Mercredi',
                      value: 'wednesday'
                  },
                  {
                      name: 'Jeudi',
                      value: 'thursday'
                  },
                  {
                      name: 'Vendredi',
                      value: 'friday'
                  },
                  {
                      name: 'Samedi',
                      value: 'saturday'
                  },
                  {
                      name: 'Dimanche',
                      value: 'sunday'
                  },
              ],
              openingHours: {
                  monday: [
                      {
                          id: 1,
                          from: { hour: 7, minute: 0 },
                          to: { hour: 12, minute: 30 },
                      }
                  ],
                  tuesday: [
                      {
                          id: 1,
                          from: { hour: 7, minute: 0 },
                          to: { hour: 12, minute: 30 },
                      }
                  ]
              }
          }
      },
  
      methods: {
          add(day) {
              // Find the last item in the list
              const lastItem = this.openingHours[day]?.length > 0 ? this.openingHours[day][this.openingHours[day]?.length - 1].id : 1;
  
              // Get the last ID and add 1 to it
              const newId = lastItem ? lastItem + 1 : 1;
  
              const time = {
                  id: newId,
                  from: { hour: 0, minute: 0 },
                  to: { hour: 0, minute: 0 },
              };
  
              !this.openingHours[day]?.length ? this.openingHours[day] = [time] : this.openingHours[day].push(time);
          },
  
          deleteTime(day, id) {
              this.openingHours[day] = this.openingHours[day].filter(i => i.id != id);
          },
  
          update(day, time, newTime) {
              this.openingHours[day.value] = this.openingHours[day.value].map(i => i.id == time.id ? newTime : i);
          }
      }
  
  }
  </script>
  
  <style>
  
  </style>