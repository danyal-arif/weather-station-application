<!-- <template>
  <div class="mt-8">
    <div id="chart">
      <VueApexCharts
        type="line"
        height="600"
        :options="chartOptions"
        :series="series"
        ref="chart"
      ></VueApexCharts>
    </div>
  </div>
</template>

<script setup>
import client from "@/helpers/mqtt";
import { ref, onMounted, onUnmounted } from "vue";
import VueApexCharts from "vue3-apexcharts";

const weatherData = ref([]);
const chart = ref(null);

onMounted(() => {
  client.on("message", (topic, message) => {
    const data = JSON.parse(message.toString());
    data.x = new Date();
    weatherData.value.push(data);
    if (chart.value.updateSeries) {
      console.log(weatherData.value);
      try {
        chart.value.updateSeries([
          {
            name: "Temperature",
            type: "column",
            data:
              weatherData.value.length >= 1
                ? weatherData.value.map((item) => ({
                    x: item.x,
                    y: item.temperature,
                  }))
                : [],
          },
          {
            name: "Humidity",
            type: "column",
            data:
              weatherData.value.length >= 1
                ? weatherData.value.map((item) => ({
                    x: item.x,
                    y: item.humidity,
                  }))
                : [],
          },
        ]);
      } catch (e) {
        console.log(e)
      }
    }
  });
});

onUnmounted(() => {
  client.end();
});

const series = weatherData;

const chartOptions = {
  charts: {
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 100,
      },
    },
  },
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
    type: "datetime",
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
  },
};
</script> -->
