const express = require('express');
const router = express.Router();

// User data as an example
router.get('/', (req, res) => {
    const users = [
        { id: 1, name: 'Alisson Yánez' },
        { id: 2, name: 'Emily Yánez' },
        { id: 3, name: 'Kimberly Yánez' },
        { id: 4, name: 'Daniel Sánchez' },
        { id: 5, name: 'Bryan Niaupari' },
    ];
    res.json(users); // List of users in JSON format
});

module.exports = router;
