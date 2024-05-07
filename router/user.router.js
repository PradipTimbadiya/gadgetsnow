const { Router } = require('express');
const UserController = require('../controller/user.controller');
const router = Router();

router.post('/sign-up',UserController.signUp);
router.post('/sign-in',UserController.signIn);


module.exports = router;