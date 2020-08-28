const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ language: 'C/Assembly-code', book: 'Computer System: A Programmer\'s Perspective' });
});

router.post('/algo', (req, res) => {
    res.status(201).json({ practice: 'leetcode' });
});

module.exports = router;