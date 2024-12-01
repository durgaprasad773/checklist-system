class ChecklistResult {
    constructor(rule, status, details) {
        this.rule = rule;
        this.status = status; // Pass or Fail
        this.details = details || "";
    }
}

module.exports = ChecklistResult;
