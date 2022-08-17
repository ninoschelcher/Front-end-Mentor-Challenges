const barchartData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

new Chart(document.getElementById("myChart"), {
  type: "bar",
  data: {
    labels: barchartData.map((item) => item.day),
    datasets: [
      {
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],

        hoverBackgroundColor: [
          "hsl(10.4, 73%, 75.3%)",
          "hsl(10.4, 73%, 75.3%)",
          "hsl(185.6, 30.8%, 79.6%)",
          "hsl(10.4, 73%, 75.3%)",
          "hsl(10.4, 73%, 75.3%)",
          "hsl(10.4, 73%, 75.3%)",
          "hsl(10.4, 73%, 75.3%)",
        ],
        data: barchartData.map((item) => item.amount),
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },

    tooltips: {
      enabled: true,
      displayColors: false,
      bodyFont: "DM Sans",
      yPadding: 10,
      xPadding: 10,
      backgroundColor: "hsl(25, 47%, 15%)",
      bodyFontColor: "rgb(255, 255, 255)",
      cornerRadius: 5,
      caretSize: 0,

      callbacks: {
        title: function () {},
      },
      xAlign: "center",
      yAlign: "top",
    },
    scales: {
      x: {
        ticks: {
          fontFamily: "DM Sans",
        },
        beginAtZero: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  },
});
