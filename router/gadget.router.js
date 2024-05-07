const { Router } = require('express');
const MobileController = require('../controller/gadget.controller');
const router = Router();
const {multer} = require('../middleware/multer');
const {verifySeller} = require('../middleware/auth');

router.get('/find-gadget-category',MobileController.findGadgetCategory);
router.post('/add-gadget-type',multer.single('gadgetIcon'),MobileController.addGadgetType);
router.post('/add-gadget-category',verifySeller,multer.array('image',12),MobileController.addGadgetCategory);
router.post('/add-specification-incategory',MobileController.addSpecificationInCategory);

router.get('/filter/',MobileController.searchCategoryWise);

router.get('/related',MobileController.relatedCategory);

router.put('/update-gadget',verifySeller,MobileController.updateGadgetCategory);

router.delete('/delete-gadget',verifySeller,MobileController.deleteGadgetCategory);

module.exports = router;
