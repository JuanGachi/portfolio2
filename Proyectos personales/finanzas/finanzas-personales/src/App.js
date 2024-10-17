import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import AddTransaction from './components/AddTransaction';
import Register from './components/Register';
import Login from './components/Login';
import axios from 'axios';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token')); // Guardar el token JWT
  const [user, setUser] = useState(null); // Guardar la información del usuario

  useEffect(() => {
    const fetchData = async () => {
      if (token) { // Si hay token, hacer la solicitud
        try {
          const result = await axios.get('http://localhost:5000/transactions', {
            headers: {
              'x-auth-token': token, // Enviar token en el encabezado
            },
          });
          setTransactions(result.data);
        } catch (error) {
          console.error("Error al obtener las transacciones:", error);
          // Si el token es inválido, eliminarlo
          handleLogout();
        }
      }
    };
    fetchData();
  }, [token]); // Ejecutar cuando el token cambie

  // Función para añadir una nueva transacción y actualizar la lista
  const addNewTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]); // Actualiza el estado añadiendo la nueva transacción
  };

  // Función para manejar el registro exitoso
  const handleRegister = (token, userData) => {
    localStorage.setItem('token', token); // Guardar el token en localStorage
    setToken(token);
    setUser(userData); // Guardar la información del usuario
  };

  // Función para manejar el inicio de sesión exitoso
  const handleLogin = (token, userData) => {
    localStorage.setItem('token', token); // Guardar el token en localStorage
    setToken(token);
    setUser(userData); // Guardar la información del usuario
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token de localStorage
    setToken(null);
    setUser(null); // Limpiar la información del usuario
    setTransactions([]); // Limpiar las transacciones al cerrar sesión
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Gestión de Finanzas Personales
        </h1>
  
        {!token ? (
          <>
            <Register onRegister={handleRegister} />
            <Login onLogin={handleLogin} />
          </>
        ) : (
          <>
            <button onClick={handleLogout} className="text-red-500 mb-4">Cerrar Sesión</button>
            <AddTransaction addNewTransaction={addNewTransaction} token={token} />
            <Home transactions={transactions} />
          </>
        )}
      </div>
    </div>
  );
  
}

export default App;


