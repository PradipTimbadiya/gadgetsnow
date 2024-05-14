const { Router } = require('express');
const UserController = require('../controller/user.controller');
const { verifyUser } = require('../middleware/auth');
const router = Router();

router.post('/sign-up',UserController.signUp);
router.post('/sign-in',UserController.signIn);

router.post('/create-user',verifyUser,UserController.createUser);


module.exports = router;