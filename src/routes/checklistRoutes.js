const express = require('express');
const router = express.Router();
const { evaluateChecklist } = require('../controllers/checklistController');

router.post('/evaluate', evaluateChecklist);

module.exports = router;
