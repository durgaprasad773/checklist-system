const evaluationService = require('../services/evaluationService');
const checklistRules = require('../config/rules');

const evaluateChecklist = async (req, res) => {
    try {
        const inputData = req.body; // Data from user
        const result = evaluationService.evaluate(inputData, checklistRules);
        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { evaluateChecklist };
