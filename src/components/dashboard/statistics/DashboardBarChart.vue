<template>
    <div>
      <h1>Earnings</h1>
      <div>
          <Bar :data="data" :options="{}" />
      </div>
    </div>
  </template>
  
  <script>
  import data from "@/data/earnings-chart.json";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  import { Bar } from "vue-chartjs";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export default {
    components: {
      Bar,
    },
    data() {
      return {
        data: data,
      };
    },
  };
  </script>
  
  <style>
  </style>