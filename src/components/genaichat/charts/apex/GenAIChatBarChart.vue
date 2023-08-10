<template>
  <VueApexCharts
    :id="chartid"
    width="100%"
    type="line"
    :options="options"
    :series="series"
  ></VueApexCharts>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "GenAIChatBarChart",
  components: {
    VueApexCharts,
  },
  props: {
    graphArr: {
      type: Array,
      required: true,
    },
    chartid: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        chart: {
          id: "vuelinechart-message",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: this.graphArr,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
