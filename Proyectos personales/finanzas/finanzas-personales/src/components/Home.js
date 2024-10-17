import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Chart } from 'chart.js';

// Registrar las escalas y elementos que usaremos
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = ({ transactions }) => {
  const [filter, setFilter] = useState('all');

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === 'income') {
      return transaction.type === 'income';
    } else if (filter === 'expense') {
      return transaction.type === 'expense';
    }
    return true;
  });

  const incomeTotal = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const expenseTotal = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const data = {
    labels: ['Ingresos', 'Gastos'],
    datasets: [
      {
        label: 'Distribución de Finanzas',
        data: [incomeTotal, expenseTotal],
        backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 2,
        hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)'],
        hoverBorderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permitir que el gráfico se ajuste a su contenedor
    plugins: {
      legend: {
        display: true,
        position: 'top', // Mostrar la leyenda en la parte superior
        labels: {
          font: {
            size: 14,
          },
          color: '#333',
        },
      },
      title: {
        display: true,
        text: 'Distribución de Ingresos y Gastos',
        font: {
          size: 20,
        },
        color: '#333',
        padding: {
          top: 20,
          bottom: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          borderColor: '#ccc',
        },
        ticks: {
          color: '#333',
          font: {
            size: 12,
          },
        },
      },
      x: {
        grid: {
          display: false, // Ocultar las líneas de la cuadrícula en el eje x
        },
        ticks: {
          color: '#333',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Resumen de Finanzas</h1>

      {/* Gráfico de distribución */}
      <div className="relative h-64 mb-8">
        <Bar data={data} options={options} />
      </div>

      {/* Filtro para seleccionar tipo de transacción */}
      <div className="mb-4">
        <label className="mr-4 font-medium text-gray-700">Filtrar por tipo:</label>
        <select
          className="p-2 border border-gray-300 rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="income">Ingresos</option>
          <option value="expense">Gastos</option>
        </select>
      </div>

      {filteredTransactions.length === 0 ? (
        <p className="text-center text-gray-500">No hay transacciones para mostrar.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {filteredTransactions.map((transaction) => (
            <li
              key={transaction._id}
              className={`flex justify-between items-center py-4 ${
                transaction.type === 'income' ? 'bg-green-50' : 'bg-red-50'
              } rounded-md px-4 shadow-sm mb-4`}
            >
              <span className="font-medium text-gray-700">{transaction.category}</span>
              <span className="font-semibold text-gray-900">
                {new Intl.NumberFormat('es-ES', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(transaction.amount)}
              </span>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  transaction.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {transaction.type === 'income' ? 'Ingreso' : 'Gasto'}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
