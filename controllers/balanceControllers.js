const Balance = require('../models/balanceModel');

class BalanceController {
  async getAllBalances(req, res) {
    try {
      const balances = await Balance.findAll();
      res.status(200).json(balances);
    } catch (error) {
      console.error('Error al obtener balances:', error);
      res.status(500).json({ message: 'Error al obtener balances' });
    }
  }

  async getBalanceById(req, res) {
    const { id } = req.params;
    try {
      const balance = await Balance.findById(id);
      if (!balance) {
        return res.status(404).json({ message: 'Balance no encontrado' });
      }
      res.status(200).json(balance);
    } catch (error) {
      console.error('Error al obtener balance por ID:', error);
      res.status(500).json({ message: 'Error al obtener balance por ID' });
    }
  }

  async createBalance(req, res) {
    const balanceData = await req.body;
    try {
      const newBalance = new Balance(balanceData);
      await newBalance.save();
      res.status(201).json(newBalance);
    } catch (error) {
      console.error('Error al crear balance:', error);
      res.status(500).json({ message: 'Error al crear balance', error });
    }
  }

  async updateBalance(req, res) {
    const { id } = req.params;
    const balanceData = req.body;
    try {
      const updatedBalance = await Balance.findByIdAndUpdate(id, balanceData, { new: true });
      if (!updatedBalance) {
        return res.status(404).json({ message: 'Balance no encontrado' });
      }
      res.status(200).json(updatedBalance);
    } catch (error) {
      console.error('Error al actualizar balance:', error);
      res.status(500).json({ message: 'Error al actualizar balance' });
    }
  }

  async deleteBalance(req, res) {
    const { id } = req.params;
    try {
      // Eliminar el balance con el ID especificado
      const numDeletedRows = await Balance.destroy({
        where: { id: id }
      });
  
      if (numDeletedRows === 0) {
        return res.status(404).json({ message: 'Balance no encontrado' });
      }
  
      res.status(200).json({ message: 'Balance eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar balance:', error);
      res.status(500).json({ message: 'Error al eliminar balance' });
    }
  }
}

module.exports = BalanceController;
