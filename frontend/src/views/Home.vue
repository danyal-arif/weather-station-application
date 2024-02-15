<template>
  <div class="flex justify-center w-full">
    <div class="w-full p-16">
      <span class="block text-center text-4xl mb-2 text-blue-900">Weather Data</span>
      <div>
        <label class="inline-block font-bold mb-1">Select Date Range</label>
        <VueDatePicker v-model="date" range :clearable="false" />
      </div>
      <div v-if="weatherData && weatherData.length === 0" class="flex justify-center mt-8">
        <span class="text-4xl text-red-700">No Data found in this range!</span>
      </div>
      <div v-else class="mt-8">
        <div id="chart">
          <VueApexCharts
            type="line"
            height="600"
            :options="chartOptions"
            :series="series"
          ></VueApexCharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import VueApexCharts from "vue3-apexcharts";
import { axiosGet } from "@/helpers/axiosHelper";
// import { useToast } from "vue-toastification";

const date = ref();
const weatherData = ref([]);
// const toast = useToast()
onMounted(() => {
  const startDate = new Date(new Date().setDate(new Date().getDate() - 1));
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
});
watch(date, async (newVal) => {
  weatherData.value = await axiosGet(
    `/weather?startTime=${newVal[0].getTime()}&endTime=${newVal[1].getTime()}`
  );
  // if (weatherData.value?.length === 0) toast.error('No data in this time range!')
});

const series = computed(() => [
  {
    name: "Humidity",
    type: "column",
    data:
      weatherData.value.length >= 1
        ? weatherData.value.map((item) => item.humidity)
        : [],
  },
  {
    name: "Temperature",
    type: "column",
    data:
      weatherData.value.length >= 1
        ? weatherData.value.map((item) => item.temperature)
        : [],
  },
]);
const timeStamps = computed(() =>
  weatherData.value.length >= 1
    ? weatherData.value.map((item) => item.time)
    : []
);
const chartOptions = computed(() => ({
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [1, 1, 4],
  },
  title: {
    align: "left",
    offsetX: 110,
  },
  xaxis: {
    categories: timeStamps.value,
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#008FFB",
      },
      labels: {
        style: {
          colors: "#008FFB",
        },
      },
      title: {
        text: "Humidity",
        style: {
          color: "#008FFB",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    {
      seriesName: "Humidity",
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#00E396",
      },
      labels: {
        style: {
          colors: "#00E396",
        },
      },
      title: {
        text: "Temperature",
        style: {
          color: "#00E396",
        },
      },
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: "topLeft",
      offsetY: 30,
      offsetX: 60,
    },
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40,
  }
}))
</script>
