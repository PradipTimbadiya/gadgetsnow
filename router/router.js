const { Router } = require('express');
const GadgetRouter = require('./gadget.router');
const SellerRouter = require('./seller.router');
const ReviewRouter = require('./review.router');
const UserRouter = require('./user.router');
const RoleRouter = require('./role.router');
const router = Router();

router.use('/gadget',GadgetRouter);
router.use('/seller',SellerRouter);
router.use('/review',ReviewRouter);
router.use('/auth',UserRouter);
router.use('/role',RoleRouter);

module.exports = router;
