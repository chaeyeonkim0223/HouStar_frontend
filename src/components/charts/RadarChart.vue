<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  props: ['chartData'],
  mounted() {
    this.renderChart(
      //datasets
      this.chartData,
      // labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      // datasets: [
      //   {
      //     label: 'My First dataset',
      //     backgroundColor: 'rgba(179,181,198,0.2)',
      //     borderColor: 'rgba(179,181,198,1)',
      //     pointBackgroundColor: 'rgba(179,181,198,1)',
      //     pointBorderColor: '#fff',
      //     pointHoverBackgroundColor: '#fff',
      //     pointHoverBorderColor: 'rgba(179,181,198,1)',
      //     data: [65, 59, 90, 81, 56, 55, 40],
      //   },
      //   {
      //     label: 'My Second dataset',
      //     backgroundColor: 'rgba(255,99,132,0.2)',
      //     borderColor: 'rgba(255,99,132,1)',
      //     pointBackgroundColor: 'rgba(255,99,132,1)',
      //     pointBorderColor: '#fff',
      //     pointHoverBackgroundColor: '#fff',
      //     pointHoverBorderColor: 'rgba(255,99,132,1)',
      //     data: [28, 48, 40, 19, 96, 27, 100],
      //   },
      // ],

      //options
      {
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
          },
        },
      }
    );
  },
};
</script>
