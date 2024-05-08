const { Router } = require('express');
const MobileController = require('../controller/gadget.controller');
const router = Router();
const {multer} = require('../middleware/multer');
const {verifySeller,authorization} = require('../middleware/auth');

router.get('/find-gadget-category',MobileController.findGadgetCategory);
router.post('/add-gadget-type',multer.single('gadgetIcon'),MobileController.addGadgetType);
router.post('/create-gadget-category',authorization,multer.array('image',12),MobileController.addGadgetCategory);
router.post('/add-specification-incategory',authorization,MobileController.addSpecificationInCategory);

router.get('/filter/',MobileController.searchCategoryWise);

router.get('/related',MobileController.relatedCategory);

router.put('/update-gadget',authorization,MobileController.updateGadgetCategory);

router.delete('/delete-gadget',authorization,MobileController.deleteGadgetCategory);

module.exports = router;
