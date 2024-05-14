const { Router } = require('express');
const ReviewController = require('../controller/review.controller');
const { verifyUser ,authorization} = require('../middleware/auth');
const router = Router();

router.post('/add-review',authorization,ReviewController.addReview); // manage review

module.exports = router;
