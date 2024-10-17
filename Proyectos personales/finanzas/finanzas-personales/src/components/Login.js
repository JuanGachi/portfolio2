import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Intentando iniciar sesión con:', { email, password });

    try {
      const res = await axios.post('http://localhost:5000/auth/login', { email, password });
      console.log('Respuesta del servidor:', res.data);
      setMessage('Inicio de sesión exitoso');
      onLogin(res.data.token, res.data.user);
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data);
      setMessage(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Iniciar Sesión</h2>
        {message && <p className="text-red-600">{message}</p>}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          autoComplete="email"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          autoComplete="current-password"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;

