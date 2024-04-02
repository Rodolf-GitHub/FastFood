const express = require('express');
const router = express.Router();
const BalanceController = require('../controllers/balanceControllers');
const balanceController = new BalanceController();
const ValidateAccess = require('../middleWares/validateAccess'); // Importar la función de middleware correctamente
const validateAccess = new ValidateAccess();

router.get('/balances', balanceController.getAllBalances);
router.get('/balances/:id', balanceController.getBalanceById);
router.post('/balances', validateAccess.validateAccess(['any']), balanceController.createBalance);
router.put('/balances/:id', validateAccess.validateAccess(['any']), balanceController.updateBalance);
router.delete('/balances/:id', validateAccess.validateAccess(['any']), balanceController.deleteBalance);

module.exports = router;
