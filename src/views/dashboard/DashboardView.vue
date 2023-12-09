<template>
    <div class="tw-bg-gray-100 tw-p-2">

        <div class="">
            <div :key="today" class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 lg:tw-grid-cols-6 tw-gap-2">
                <DashboardCard :card="card" v-for="card in cards" :key="card.name"/>
          </div>
        </div>

        <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-2 mt-2">
            <div class="lg:tw-col-span-2 tw-bg-white tw-p-4 tw-border tw-border-solid tw-border-gray-200">
                <DashboardTicketsSection />
            </div>

            <div class="tw-bg-white tw-p-4 tw-border tw-border-solid tw-border-gray-200">
                <DashboardBarChart />
            </div>

            <div class="tw-bg-white tw-p-4 tw-border tw-border-solid tw-border-gray-200">
                <DashboardLineChart />
            </div>

        </div>
    </div>
  </template>
  
  <script setup>
import { currency } from '@/config/app';
import DashboardCard from '@/components/dashboard/statistics/DashboardCard'
import DashboardBarChart from '@/components/dashboard/statistics/DashboardBarChart'
import DashboardLineChart from '@/components/dashboard/statistics/DashboardLineChart'
import Dashboard from '@/api/dashboard/Dashboard';
import DashboardTicketsSection from '@/components/dashboard/statistics/DashboardTicketsSection.vue';
import moment from 'moment';
import { ref, computed, provide } from 'vue';

const date = ref(new Date());
const today = computed(() => moment(date.value).format('YYYY-MM-DD'));
const params = ref({
    // date_begin: today
})

const cards = ref([
    {
        name: 'NOUVEAU CLIENTS',
        value: 20,
        icon: 'la:user-alt',
        // callback: async () => {
        //     return Dashboard.ca_off(params)
        //     .then( res => res.data.result)
        // }
    },
    {
        name: 'C.A DU JOUR',
        value: 0,
        icon: 'bx:rocket',
        callback: async () => {
            return Dashboard.ca_off(params)
            .then( res => res.data.result.toFixed(2) + ' ' + currency)
        }
    },
    {
        name: 'R.BRUT DU JOUR',
        value: 0,
        icon: 'solar:calculator-broken',
        callback: async () => {
            return Dashboard.ca_net(params)
            .then( res => res.data.result.toFixed(2) + ' ' + currency);
            
        }
    },
    {
        name: 'C.A REALISE',
        value: 0,
        icon: 'streamline:money-cash-bag-dollar-bag-payment-cash-money-finance',
        callback: async () => {
            return Dashboard.ca_gross(params)
            .then( res => res.data.result.toFixed(2) + ' ' + currency)
        }
    },
    {
        name: 'R.BRUT REALISE',
        value: '0 ' + currency,
        icon: 'tabler:brand-cashapp',
    },
    {
        name: 'N° DE VENTES',
        value: 0,
        icon: 'ep:sell',
        callback: async () => {
            return Dashboard.ticket_total(params)
            .then( res => res.data.result)
        }
    },
  ]);

  const setParams = v => params.value = v; 

  provide('params', {
    params,
    setParams
  })
  </script>
  
  <style>
  
  </style>