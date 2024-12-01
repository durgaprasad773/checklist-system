const express = require('express');
const checklistRoutes = require('./routes/checklistRoutes');

const app = express();
app.use(express.json());
app.use('/api', checklistRoutes);

module.exports = app;
