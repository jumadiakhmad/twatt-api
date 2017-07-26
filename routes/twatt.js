const express = require('express');
const router = express.Router();
const twatController = require('../controllers/twatController');

router.get('/timeline', twatController.timeline);
router.get('/search', twatController.search);
router.post('/post', twatController.post);

module.exports = router;
