const { Router } = require('express');
const MobileController = require('../controller/gadget.controller');
const router = Router();
const {multer} = require('../middleware/multer');
const {verifySeller,authorization} = require('../middleware/auth');

router.get('/find-gadget-category',MobileController.findGadgetCategory); //manage gadget
router.post('/add-gadget-type',multer.single('gadgetIcon'),MobileController.addGadgetType); 
router.post('/create-gadget-category',authorization,multer.array('image',12),MobileController.addGadgetCategory); //manage gadget
router.post('/add-specification-incategory',authorization,MobileController.addSpecificationInCategory); //manage gadget

router.get('/filter/',MobileController.searchCategoryWise); //manage gadget

router.get('/related',MobileController.relatedCategory); //manage gadget

router.put('/update-gadget',authorization,MobileController.updateGadgetCategory); //manage gadget

router.delete('/delete-gadget',authorization,MobileController.deleteGadgetCategory); //manage gadget

module.exports = router;
