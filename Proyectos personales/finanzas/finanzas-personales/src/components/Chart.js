import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map(transaction => transaction.date),
    datasets: [{
      label: 'Gastos e Ingresos',
      data: data.map(transaction => transaction.amount),
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
    }]
  };

  return <Line data={chartData} />;
};

export default Chart;
