<template>
    <div class="tw-bg-gray-100 tw-p-2">
        <div class="">
            <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 lg:tw-grid-cols-6 tw-gap-2">
                <DashboardCard v-for="card in cards" :key="card.name" :name="card.name" :value="card.value" :icon="card.icon" />
          </div>
        </div>

        <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-2 mt-2">
            <div class="tw-bg-white tw-p-4">
                <DashboardBarChart />
            </div>

            <div class="tw-bg-white tw-p-4">
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

const cards = [
    {
        name: 'NOUVEAU CLIENTS',
        value: 25,
        icon: 'la:user-alt'
    },
    {
        name: 'C.A DU JOUR',
        value: '602 ' + currency,
        icon: 'bx:rocket'
    },
    {
        name: 'R.BRUT DU JOUR',
        value: '400 ' + currency,
        icon: 'solar:calculator-broken'
    },
    {
        name: 'C.A REALISE',
        value: '1,520 ' + currency,
        icon: 'streamline:money-cash-bag-dollar-bag-payment-cash-money-finance'
    },
    {
        name: 'R.BRUT REALISE',
        value: '0 ' + currency,
        icon: 'tabler:brand-cashapp'
    },
    {
        name: 'N° DE VENTES',
        value: '30',
        icon: 'ep:sell'
    },
  ];
  </script>
  
  <style>
  
  </style>