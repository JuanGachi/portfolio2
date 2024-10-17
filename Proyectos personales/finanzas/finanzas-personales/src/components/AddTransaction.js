import React, { useState } from 'react';
import axios from 'axios';

const AddTransaction = ({ addNewTransaction, token }) => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income'); // Asegúrate de que este valor puede cambiar a 'expense'
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !amount) {
      setMessage('Por favor ingresa una categoría y un monto.');
      return;
    }

    const newTransaction = {
      category,
      type, // Asegúrate de que este valor sea 'income' o 'expense'
      amount: parseFloat(amount),
    };

    try {
      const result = await axios.post('http://localhost:5000/transactions/add', newTransaction, {
        headers: {
          'x-auth-token': token, // Enviar el token en el encabezado
        },
      });
      addNewTransaction(result.data);
      setMessage('Transacción añadida con éxito');
      setCategory('');
      setAmount('');
    } catch (error) {
      console.error(error);
      setMessage('Error al añadir la transacción');
    }

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Agregar Transacción</h2>
      {message && <p className="text-red-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Categoría</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. Comida, Transporte"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            autoComplete="off" // Opcional: Para evitar advertencias
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            autoComplete="off" // Opcional: Para evitar advertencias
          >
            <option value="income">Ingreso</option>
            <option value="expense">Gasto</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Monto</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 50"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            autoComplete="off" // Opcional: Para evitar advertencias
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;

