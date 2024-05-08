const { Router } = require('express');
const RoleController = require('../controller/role.controller');
const {verifyUser,adminOnlyAccess} = require('../middleware/auth');
const router = Router();

router.post('/add-role',verifyUser,adminOnlyAccess,RoleController.addRole);
router.get('/getall-role',verifyUser,adminOnlyAccess, RoleController.getAllRole);
router.get('/getperticular-role/:id',verifyUser,adminOnlyAccess, RoleController.getPerticularRole);
router.put('/update-role/:id',verifyUser,adminOnlyAccess, RoleController.updateRole);
router.delete('/delete-role/:id',verifyUser,adminOnlyAccess, RoleController.deleteRole);
router.delete('/delete-permission/:id',verifyUser,adminOnlyAccess, RoleController.deletePermission);


module.exports = router;
