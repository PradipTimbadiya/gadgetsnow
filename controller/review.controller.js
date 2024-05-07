const ReviewModel = require('../models/review.model');
const {GadgetCategoryModel} = require('../models/gadget.model');
const aggregate = require('aggregation');

const ReviewController = {
    addReview : async function(req,res){
        try {
            const {categoryId , rating , description} = req.body;

            const user = req.user;
            const findCategory = await GadgetCategoryModel.findOne({_id:categoryId});

            if(!findCategory)
            {
                const response = { success : false , message:"Category Not Found"};
                return res.status(404).json(response);
            }

            const userId = user._id;
            
            const addReview = new ReviewModel({userId,rating,description});
            // await addReview.save();

            findCategory.review.push(addReview);

            const totalRatings = findCategory.review.reduce((acc, review) => acc + review.rating, 0);
            const avgRating = totalRatings / findCategory.review.length;

            findCategory.avgRating = avgRating;
            await findCategory.save();
            

            const response = { success : true ,data:findCategory, message:"Review Added Successfully"};
            return res.status(201).json(response);

        } catch (error) {
            const response = { success : false , message:error.message};
            return res.status(500).json(response);
        }
    }
}

module.exports = ReviewController;