const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const authMiddleware = require('../middlewares/authMiddleware');

// Obtener todas las transacciones (solo autenticados)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear nueva transacción (solo autenticados)
router.post('/add', authMiddleware, async (req, res) => {
  const { category, type, amount } = req.body;

  try {
    const newTransaction = new Transaction({
      user: req.user.id, // Añadir el usuario autenticado
      category,
      type,
      amount,
    });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;



