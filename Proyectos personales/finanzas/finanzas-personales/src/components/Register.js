import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/auth/register', { username, email, password });
      setMessage('Registro exitoso');
      onRegister(res.data.token, res.data.user);
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || 'Error al registrar');
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Registrar</h2>
        {message && <p className="text-red-600">{message}</p>}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          autoComplete="username"
          required
        />
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
          autoComplete="new-password"
          required
        />
        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;

