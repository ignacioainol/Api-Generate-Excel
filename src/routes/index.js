const express = require('express');
const router = express.Router();

const excelController = require('../controllers/excel_generate');

router.get('/', (req, res) => {
    res.send('route ok');
});

router.get('/create', excelController.index)

module.exports = router;