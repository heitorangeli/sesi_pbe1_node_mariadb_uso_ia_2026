const express = require('express');
const router = express.Router();
const UsoiaController = require('../controllers/usoia.controller');

router.get('/usoia', UsoiaController.listar);
router.get('/usoia/:id', UsoiaController.buscarPorId);
router.post('/usoia', UsoiaController.criar);
router.put('/usoia/:id', UsoiaController.atualizar);
router.delete('/usoia/:id', UsoiaController.deletar);

module.exports = router;
