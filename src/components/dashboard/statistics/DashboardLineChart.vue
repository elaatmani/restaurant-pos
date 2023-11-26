<template>
    <div>
      <h1>Profite</h1>
      <div>
          <Line :data="data" :options="{}" />
      </div>
    </div>
  </template>
  
  <script>
  import data from "@/data/line-chart.json";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
  import { Line } from 'vue-chartjs'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  
  export default {
    components: {
      Line,
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