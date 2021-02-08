const express = require('express');
const router = express.Router();

const excelController = require('../controllers/excel_generate');

router.get('/', (req, res) => {
    res.send('route ok');
});

router.get('/', (req, res) => {
    res.send('ok server');
})
router.get('/create', excelController.index);
router.get('/query', excelController.testQuery);

module.exports = router;