const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');

  // Verificar si el token está presente
  if (!token) {
    return res.status(401).json({ message: 'No hay token, permiso denegado' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, 'tu_secreto_jwt'); // Asegúrate de que el secreto es el mismo que usaste para firmar
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;


