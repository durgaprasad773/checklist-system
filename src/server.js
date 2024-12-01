const app = require('./app');
const { port } = require('./config/settings');

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
