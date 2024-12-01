const ChecklistResult = require('../models/checklistModel');

const evaluate = (data, rules) => {
    return rules.map(rule => {
        const status = rule.condition(data) ? "Pass" : "Fail";
        return new ChecklistResult(rule.name, status);
    });
};

module.exports = { evaluate };
