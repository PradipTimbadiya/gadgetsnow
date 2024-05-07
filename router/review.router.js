const { Router } = require('express');
const ReviewController = require('../controller/review.controller');
const { verifyUser } = require('../middleware/auth');
const router = Router();

router.post('/add-review',verifyUser,ReviewController.addReview);

module.exports = router;
