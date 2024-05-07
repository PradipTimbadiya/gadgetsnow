const { Router } = require('express');
const SellerController = require('../controller/seller.contoller');
const router = Router();

router.post('/seller-signup',SellerController.signupSeller);
router.post('/seller-signin',SellerController.signinSeller);


module.exports = router;