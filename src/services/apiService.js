const axios = require('axios');
const { apiUrl } = require('../config/settings');

const fetchData = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch data from the API.");
    }
};

module.exports = { fetchData };
