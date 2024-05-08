const mongoose = require('mongoose');

const GadgetType = mongoose.Schema({
    name:{
        type: String
    },
    descriptions:{
        type: String,
        required: true
    },
    gadgetIcon:{
        type: String,
        default: null
    }
})


const Specifications = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    fields:[{
        key:{
            type: String,
            // required:true,
            default:null
        },
        value:{
            type: mongoose.Schema.Types.Mixed,
            // required: true,
            default:null
        },
        type:{
            type:String,
            default:null
        }
    }]
})

const GadgetCategory = mongoose.Schema({
    // sellerId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'sellers',
    //     default:null
    // },
    gadgetName:{
        type: String,
        required: true
    },
    gadgetTypeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'gadgets',
        default:null
    },
    image:{
        type: [String],
        default: null
    },
    description:{
        type: String,
        default: null
    },
    isCompare:{
        type: Boolean,
        default:false
    },
    specifications:[Specifications],
    review:{
        type:Array,
    },
    avgRating:{
        type: Number
    },
    addDate:{
        type: Date,
        default: Date.now()
    }
})



const GadgetTypeModel = mongoose.model('gadgettype',GadgetType);
const GadgetCategoryModel = mongoose.model('gadgetcategory',GadgetCategory);
// const SpecificationModel = mongoose.model('specification',Specifications);


// module.exports.GadgetTypeModel = GadgetTypeModel;
// module.exports.GadgetCategoryModel = GadgetCategoryModel;

module.exports = {
    GadgetTypeModel,
    GadgetCategoryModel
}
// module.exports.SpecificationModel = SpecificationModel;