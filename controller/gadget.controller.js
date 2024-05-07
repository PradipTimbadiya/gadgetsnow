const { GadgetTypeModel, GadgetCategoryModel } = require('../models/gadget.model')

const MobileController = {
    findGadgetCategory: async function (req, res) {
        try {
            const data = req.query;

            let findGadgetCategory = await GadgetCategoryModel.find({ gadgetName: data.gadgetName });

            if (!findGadgetCategory) {
                const response = { syccess: false, message: "Category Not Found" };
                return res.status(404).json(response);
            }

            let totalPage = findGadgetCategory.length / 10;

            const page = req.query.page || 1;
            const limit = 10;
            const skip = (page - 1) * limit;

            let spec;
            let field;

            if (data.gadgetName == "phones") {
                spec = ["general", "storage", "network connectivity", "display", "performance", "camera", "battery"];
                field = ["brand", "model", "ram", "internal memory", "price in india", "battery capacity", "screen size", "network", "primary camera", "secondary camera", "processor"]
            } else if (data.gadgetName == "leptops") {
                spec = ["general", "performance", "battery"];
                field = ["brand", "model", "storage", "display size", "price in india", "processor", "graphics card", "ram", "battery capacity"]
            } else if (data.gadgetName == "tablets") {
                spec = ["general", "performance", "display", "battery"];
                field = ["brand", "model", "internal memory", "ram", "screensize", "processor", "capacity", "price in india", "lunch date"]
            } else if (data.gadgetName == "cameras") {
                spec = ["general", "sensor", "lens", "connectivity", "battery"];
                field = ["title", "type", "effective resolution", "optical zoom", "bluetooth", "battery type", "price in india"]
            } else if (data.gadgetName == "tvs") {
                spec = ["general", "display"];
                field = ["brand", "model", "size diagonal", "type", "resolution", "price in india"]
            } else if (data.gadgetName == "smartwatches") {
                spec = ["general", "display", "features"];
                field = ["brand", "model", "water resistant", "screen size", "price in india"]
            } else if (data.gadgetName == "Acs") {
                spec = ["general", "cooling performance", "body design features"];
                field = ["title", "capacity in tons", "star rating", "cooling capacity", "compressor", "price in india"]
            } else if (data.gadgetName == "washing machines") {
                spec = ["general", "in box warranty services"];
                field = ["title", "warranty", "price in india"]
            } else if (data.gadgetName == "refrigerators") {
                spec = ["general"];
                field = ["title", "capacity", "price in india"]
            } else if (data.gadgetName == "power banks") {
                spec = ["general", "battery charging", "power requirement", "connectivity", "features"];
                field = ["brand", "model", "capacity", "power output", "battery type", "connector type", "LED indicators", "price in india"]
            } else if (data.gadgetName == "hair curlers") {
                spec = ["general"];
                field = ["brand", "model", "type", "color", "price in india"]
            } else if (data.gadgetName == "trimmers") {
                spec = ["general", "power features"];
                field = ["brand", "model number", "color", "charging time", "battery run time", "price in india"]
            } else if (data.gadgetName == "hair straightners") {
                spec = ["general", "body and design features", "power features"];
                field = ["brand", "model", "ideal for", "swivel cord", "number of temperature", "price in india"]
            } else if (data.gadgetName == "hair dryers") {
                spec = ["general", "body and design features"];
                field = ["brand", "model id", "ideal for", "number of heat settings", "cord length", "price in india"]
            } else if (data.gadgetName == "microwave") {
                spec = ["general"];
                field = ["brand", "model name", "type", "color", "capacity", "price in india"]
            } else if (data.gadgetName == "bluetooth speakers") {
                spec = ["general", "battery"];
                field = ["brand", "type", "bluetooth", "charging time", "price in india"]
            } else if (data.gadgetName == "headphones") {
                spec = ["general", "battery", "headphone type", "connectivity", "microphone"];
                field = ["brand", "headphone type", "playback time", "bluetooth", "charging time", "microphone", "price in india"]
            } else if (data.gadgetName == "air fryers") {
                spec = ["general"];
                field = ["brand", "power consumption", "price in india"]
            } else if (data.gadgetName == "irons") {
                spec = ["general", "build", "dimensions"];
                field = ["brand", "model", "type", "colour", "soleplate type", "weight", "price in india"]
            } else if (data.gadgetName == "fans") {
                spec = ["general", "product details"];
                field = ["brand", "blade material", "blade sweep", "airflow", "price in india"]
            } else if (data.gadgetName == "air coolers") {
                spec = ["general"];
                field = ["brand", "model name", "water tank capacity", "colour", "type", "cooling media", "price in india"]
            } else if (data.gadgetName == "hand blenders") {
                spec = ["general"];
                field = ["brand", "power", "colour", "blade material", "price in india"]
            } else if (data.gadgetName == "food processors") {
                spec = ["general", "power"];
                field = ["brand", "body material", "power consumption", "price in india"]
            } else if (data.gadgetName == "chimneys") {
                spec = ["general", "dimensions"];
                field = ["brand", "model", "type", "size", "price in india"]
            } else if (data.gadgetName == "room heaters") {
                spec = ["general", "power"];
                field = ["brand", "model name", "power consumption", "type", "colour", "heat settings", "price in india"]
            }

            findGadgetCategory = await GadgetCategoryModel.aggregate([
                {
                    $match: {
                        gadgetName: data.gadgetName
                    }
                },
                {
                    $addFields: {
                        summary: {
                            $filter: {
                                input: {
                                    $map: {
                                        input: spec,
                                        as: "category",
                                        in: {
                                            $let: {
                                                vars: {
                                                    spec: {
                                                        $arrayElemAt: [
                                                            {
                                                                $filter: {
                                                                    input: "$specifications",
                                                                    cond: { $eq: ["$$this.name", "$$category"] }
                                                                }
                                                            },
                                                            0
                                                        ]
                                                    }
                                                },
                                                in: {
                                                    $map: {
                                                        input: {
                                                            $filter: {
                                                                input: "$$spec.fields",
                                                                cond: {
                                                                    $in: ["$$this.key", field]
                                                                }
                                                            }
                                                        },
                                                        as: "field",
                                                        in: {
                                                            key: "$$field.key",
                                                            value: "$$field.value",
                                                            type: "$$field.type"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                as: "summaryItem",
                                cond: { $ne: ["$$summaryItem", []] }
                            }
                        }
                    }
                },
                {
                    $addFields: {
                        summary: {
                            $filter: {
                                input: "$summary",
                                as: "item",
                                cond: { $ne: ["$$item", null] }
                            }
                        }
                    }
                },
                {
                    $project: {
                        _id: 1,
                        sellerId: 1,
                        gadgetName: 1,
                        gadgetTypeId: 1,
                        image: 1,
                        description: 1,
                        specifications: 1,
                        isCompare: 1,
                        avgRating: 1,
                        addDate: 1,
                        is_most_popular: 1,
                        review: 1,
                        summary: {
                            $reduce: { input: "$summary", initialValue: [], in: { $concatArrays: ["$$value", "$$this"] } }
                        }
                    }
                }
            ]).skip(skip).limit(limit);

            if (findGadgetCategory.length == 0) {
                const response = { syccess: false, message: "Data Not Found" };
                return res.status(404).json(response);
            }

            const response = { syccess: true, data: findGadgetCategory, message: `all ${data.gadgetName}` };
            return res.status(200).json(response);

        } catch (error) {
            const response = { syccess: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    addGadgetType: async function (req, res) {
        try {
            const data = req.body;

            const findGadgetType = await GadgetTypeModel.findOne({ name: data.name });
            if (findGadgetType) {
                const response = { syccess: false, message: "gadget type already Exists" };
                return res.status(400).json(response);
            }

            let gadgetIcon = req.file?.path;

            data.gadgetIcon = gadgetIcon;

            const gadget = new GadgetTypeModel(data);
            await gadget.save();

            const response = { syccess: true, data: gadget, message: "gadget type added successfully" };
            return res.status(201).json(response);
        } catch (error) {
            const response = { syccess: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    addGadgetCategory: async function (req, res) {
        try {
            const data = req.body;
            const seller = req.seller;
            if (!data.gadgetName) {
                const response = { success: false, message: "Gadget name is required" };
                return res.status(400).json(response);
            }
            const findGadgetType = await GadgetTypeModel.findOne({ name: data.gadgetName });
            if (!findGadgetType) {
                const response = { success: false, message: "gadget type not exists" };
                return res.status(400).json(response);
            }

            let gadgetTypeId = findGadgetType._id;
            let sellerId = seller._id;

            let image = [];

            for (let i = 0; i < req.files.length; i++) {
                image.push(req.files[i]?.path)
            }

            data.image = image;

            const addCategory = new GadgetCategoryModel({ ...data, sellerId: sellerId, gadgetTypeId });
            await addCategory.save();


            const response = { success: true, data: addCategory, message: `${addCategory.gadgetName} add successfully` };
            return res.status(201).json(response);
        } catch (error) {
            const response = { success: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    addSpecificationInCategory: async function (req, res) {
        try {
            const data = req.body;

            const findName = await GadgetCategoryModel.findOne({ _id: data.id });

            if (!findName) {
                const response = { syccess: false, message: "category not found" };
                return res.status(400).json(response);
            }

            const add = await GadgetCategoryModel.findOneAndUpdate(
                { _id: data.id, 'specifications.name': { $ne: data.specificationName } },
                {
                    $addToSet: {
                        specifications: {
                            name: data.specificationName,
                            fields: data.fields
                        }
                    }
                },
                { new: true }
            );

            if (!add) {
                const add = await GadgetCategoryModel.findOneAndUpdate(
                    { _id: data.id, 'specifications.name': data.specificationName },
                    {
                        $addToSet: {
                            'specifications.$.fields': { $each: data.fields }
                        }
                    },
                    { new: true, unique: true }
                );
                const response = { syccess: true, message: "specifications add successfully", data: add };
                return res.status(201).json(response);
            }

            const response = { syccess: true, message: "specifications add successfully", data: add };
            return res.status(201).json(response);

        } catch (error) {
            const response = { syccess: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    searchCategoryWise: async function (req, res) {
        try {
            const data = req.query;

            let query = (
                {
                    "$and": [
                        {
                            "$and": []
                        }
                    ]
                }
            );

            const constructDynamicQueryForString = (key, value) => {
                let query = {
                    specifications: {
                        $elemMatch: {
                            fields: {
                                $elemMatch: {
                                    key: { $regex: key, $options: 'i' },
                                    value: { $regex: value, $options: 'i' }
                                }
                            }
                        }
                    }
                };
                return query;
            };

            const constructDynamicQueryForInteger = (key, value) => {
                let query = {
                    specifications: {
                        $elemMatch: {
                            fields: {
                                $elemMatch: {
                                    key: { $regex: key, $options: 'i' },
                                    value: { $eq: parseFloat(value) }
                                }
                            }
                        }
                    }
                };
                return query;
            };

            const constructDynamicQueryForIntegerAbove = (key, value) => {
                let query = {
                    specifications: {
                        $elemMatch: {
                            fields: {
                                $elemMatch: {
                                    key: { $regex: key, $options: 'i' },
                                    value: { $gte: parseFloat(value) }
                                }
                            }
                        }
                    }
                };
                return query;
            };

            const constructDynamicQueryForIntegerBelow = (key, value) => {
                let query = {
                    specifications: {
                        $elemMatch: {
                            fields: {
                                $elemMatch: {
                                    key: { $regex: key, $options: 'i' },
                                    value: { $lte: parseFloat(value) }
                                }
                            }
                        }
                    }
                };
                return query;
            };

            const constructDynamicQueryForIntegerRange = (key, minValue, maxValue) => {
                let query = {
                    specifications: {
                        $elemMatch: {
                            fields: {
                                $elemMatch: {
                                    key: { $regex: key, $options: 'i' },
                                    value: { $gt: parseFloat(minValue), $lte: parseFloat(maxValue) }
                                }
                            }
                        }
                    }
                };
                return query;
            };

            const ignoredKeys = ["sort", "id", "page"];

            for (const key in data) {
                if (!ignoredKeys.includes(key) && data.hasOwnProperty(key)) {
                    let value = data[key];
                    let values = value.split(',');

                    let orQuery = { "$or": [] };

                    let below;
                    let above;

                    for (let i = 0; i < values.length; i++) {
                        if (values[i].split(' ')[0] == "Above") {
                            above = values[i].split(' ')[1];
                        }
                        else if (values[i].split(' ')[0] == "Below") {
                            below = values[i].split(' ')[1];
                        }
                    }


                    if (values.length > 1) {
                        for (let i = 0; i < values.length; i++) {

                            let fixRange = value.split(' ')[1];

                            value = values[i].split(' ')[0];

                            let minValue = value.split('-')[0];
                            let maxValue = value.split('-')[1];


                            if (isNaN(value) && isNaN(minValue) && !maxValue && minValue != "Above" && minValue != "Below") {
                                // console.log(' IN multi string');
                                const dynamicQuery = constructDynamicQueryForString(key, value);
                                orQuery.$or.push(dynamicQuery);
                            }
                            else if (minValue && maxValue && minValue != "Above" && minValue != "Below") {
                                // console.log('IN multi range');
                                const dynamicQuery = constructDynamicQueryForIntegerRange(key, minValue, maxValue);
                                orQuery.$or.push(dynamicQuery);
                            }
                            else {
                                // console.log('yes multi');
                                if (!isNaN(fixRange) && minValue != "Above" && minValue != "Below") {
                                    value = fixRange
                                    const dynamicQuery = constructDynamicQueryForInteger(key, value);
                                    orQuery.$or.push(dynamicQuery);
                                }
                                else if (minValue == "Above" && minValue != "Below") {
                                    // console.log("in multi above");
                                    value = above;
                                    console.log(value);
                                    const dynamicQuery = constructDynamicQueryForIntegerAbove(key, value);
                                    orQuery.$or.push(dynamicQuery);
                                }
                                else if (minValue == "Below") {
                                    // console.log("in multi below");
                                    value = below;
                                    const dynamicQuery = constructDynamicQueryForIntegerBelow(key, value);
                                    orQuery.$or.push(dynamicQuery);
                                }
                                else {
                                    // console.log('d');
                                    const dynamicQuery = constructDynamicQueryForInteger(key, value);
                                    orQuery.$or.push(dynamicQuery);
                                }
                            }
                        }
                    }
                    else {
                        let fixRange = value.split(' ')[1];

                        value = value.split(' ')[0];

                        let minValue = value.split('-')[0];
                        let maxValue = value.split('-')[1];


                        if (isNaN(value) && isNaN(minValue) && !maxValue && minValue != "Above" && minValue != "Below") {
                            // console.log('string');
                            const dynamicQuery = constructDynamicQueryForString(key, value);
                            orQuery.$or.push(dynamicQuery);
                        }
                        else if (minValue && maxValue && minValue != "Above" && minValue != "Below") {
                            // console.log('range');
                            const dynamicQuery = constructDynamicQueryForIntegerRange(key, minValue, maxValue);
                            orQuery.$or.push(dynamicQuery);
                        }
                        else {
                            // console.log('yes');
                            if (!isNaN(fixRange) && minValue != "Above" && minValue != "Below") {
                                value = fixRange
                                const dynamicQuery = constructDynamicQueryForInteger(key, value);
                                orQuery.$or.push(dynamicQuery);
                            }
                            else if (minValue == "Above" && minValue != "Below") {
                                value = above;
                                const dynamicQuery = constructDynamicQueryForIntegerAbove(key, value);
                                orQuery.$or.push(dynamicQuery);
                            }
                            else if (minValue == "Below") {
                                value = below;
                                const dynamicQuery = constructDynamicQueryForIntegerBelow(key, value);
                                orQuery.$or.push(dynamicQuery);
                            }
                            else {
                                console.log('d');
                                const dynamicQuery = constructDynamicQueryForInteger(key, value);
                                orQuery.$or.push(dynamicQuery);
                            }
                        }
                    }
                    query.$and[0].$and.push(orQuery);
                }
            }

            const id = data.id;
            const findGadget = await GadgetTypeModel.findById(id);

            let gadgetName = findGadget.name;

            let sortData;
            if (data.sort != undefined && query.$and[0].$and.length == 0) {
                if (data.sort == "latest") {
                    sortData = [
                        { $match: { "gadgetName": gadgetName } },
                        { $sort: { "addDate": -1 } }
                    ]
                } else if (data.sort == "popular") {
                    sortData = [
                        { $match: { "gadgetName": gadgetName } },
                        { $sort: { "is_most_popular": -1 } }
                    ]
                } else if (data.sort == "rating") {
                    sortData = [
                        { $match: { "gadgetName": gadgetName } },
                        { $sort: { "avgRating": -1 } }
                    ]
                } else if (data.sort == "price") {
                    sortData = [
                        { $match: { "gadgetName": gadgetName } },
                        { $unwind: "$specifications" },
                        { $unwind: "$specifications.fields" },
                        {
                            $match: {
                                "specifications.fields.key": "price in india"
                            }
                        },
                        {
                            $sort: {
                                "specifications.fields.value": -1
                            }
                        }
                    ];
                }
                else if (data.sort == "recent") {
                    sortData = [
                        {
                            $match: {
                                "gadgetName": gadgetName,
                                "review": { $exists: true }
                            }
                        },
                        {
                            $sort: {
                                "review.createdAt": -1
                            }
                        }
                    ]
                }
            }
            else {
                if (data.sort == "latest") {
                    sortData = [
                        { $match: { "gadgetName": gadgetName, ...query } },
                        { $sort: { "addDate": -1 } }
                    ]
                } else if (data.sort == "popular") {
                    sortData = [
                        { $match: { "gadgetName": gadgetName, ...query } },
                        { $sort: { "is_most_popular": -1 } }
                    ]
                } else if (data.sort == "rating") {
                    sortData = [
                        { $match: { "gadgetName": gadgetName, ...query } },
                        { $sort: { "avgRating": -1 } }
                    ]
                } else if (data.sort == "price") {
                    sortData = [
                        { $match: { "gadgetName": gadgetName, ...query } },
                        { $unwind: "$specifications" },
                        { $unwind: "$specifications.fields" },
                        {
                            $match: {
                                "specifications.fields.key": "price in india"
                            }
                        },
                        {
                            $sort: {
                                "specifications.fields.value": -1
                            }
                        }
                    ];
                } else if (data.sort == "recent") {
                    sortData = [
                        {
                            $match: {
                                "gadgetName": gadgetName,
                                ...query,
                                "review": { $exists: true }
                            }
                        },
                        {
                            $sort: {
                                "review.createdAt": -1
                            }
                        }
                    ]
                }

            }
            console.log(sortData)

            const page = req.query.page || 1;
            const limit = 10;
            const skip = (page - 1) * limit;

            let findData;

            if (query.$and[0].$and.length == 0) {
                if (sortData == undefined) {
                    findData = await GadgetCategoryModel.find({ gadgetName: gadgetName }).skip(skip).limit(limit);
                }
                else {
                    let fd = await GadgetCategoryModel.aggregate(sortData).skip(skip).limit(limit);
                    let d = []
                    for (let i = 0; i < fd.length; i++) {
                        a = await GadgetCategoryModel.findById(fd[i]._id);
                        d.push(a);
                    }
                    findData = d;
                }
            }
            else {
                if (sortData == undefined) {
                    findData = await GadgetCategoryModel.find({ gadgetName: gadgetName, ...query }).skip(skip).limit(limit);
                }
                else {
                    let fd = await GadgetCategoryModel.aggregate(sortData).skip(skip).limit(limit);
                    let d = []
                    for (let i = 0; i < fd.length; i++) {
                        a = await GadgetCategoryModel.findById(fd[i]._id);
                        d.push(a);
                    }
                    findData = d;
                }
            }


            if (findData.length == 0) {
                const response = { syccess: false, message: "Data Not Found" };
                return res.status(404).json(response);
            }


            const response = { syccess: true, data: findData, message: "all filter data" };
            return res.status(200).json(response);


        } catch (error) {
            const response = { syccess: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    relatedCategory: async function (req, res) {
        try {
            const id = req.query.id;

            const findCategory = await GadgetCategoryModel.findOne({ _id: id });
            if (!findCategory) {
                const response = { success: false, message: "Category Not Found" };
                return res.status(404).json(response);
            }

            const { specifications } = findCategory;

            let brand;
            for (let i = 0; i < specifications.length; i++) {
                for (let j = 0; j < specifications[i].fields.length; j++) {
                    if (specifications[i].fields[0].key == "brand") {
                        brand = specifications[i].fields[0].value;
                    }
                }
            }
            console.log(brand);

            const relatedData = await GadgetCategoryModel.aggregate([
                {
                    $match: {
                        "gadgetName": findCategory.gadgetName,
                        "specifications.fields": {
                            $elemMatch: {
                                "key": "brand",
                                "value": brand
                            }
                        }
                    }
                }
            ]).skip(1).limit(10);

            const response = { success: true, data: relatedData, message: "related data" };
            return res.status(200).json(response)

        } catch (error) {
            const response = { success: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    updateGadgetCategory: async function (req, res) {
        try {
            const id = req.body.id;
            const updates = req.body.field;
            const seller = req.seller;

            const findGadget = await GadgetCategoryModel.findOne({ _id: id });
            if (!findGadget) {
                const response = { success: false, message: "Gadget Not Found" };
                return res.status(404).json(response);
            }

           
            if((findGadget.sellerId).toString() != (seller._id).toString()){
                const response = { success: false, message: "You Not Eligable For Update" };
                return res.status(400).json(response);
            }

            const specifications = findGadget.specifications;

            for (const update of updates) {
                const { key, value, keyvalue, type , specificationName } = update;
                let fieldToUpdate;

                for (const spec of specifications) {
                    const fields = spec.fields;
                    fieldToUpdate = fields.find(field => field.key === key);

                    if (fieldToUpdate) {
                        break;
                    }
                }

                if (!fieldToUpdate) {
                    return res.status(404).json({ message: `Field '${key}' not found` });
                }

                if (value && keyvalue) {

                    fieldToUpdate.value = value;
                    fieldToUpdate.key = keyvalue;
                }
                else if (value) {
                    fieldToUpdate.value = value;
                }
                else if (keyvalue) {

                    fieldToUpdate.key = keyvalue;
                }
            }

            // if (value && keyvalue) {

            //     fieldToUpdate.value = value;
            //     fieldToUpdate.key = keyvalue;
            // }
            // else if (value) {
            //     fieldToUpdate.value = value;
            // }
            // else if (keyvalue) {

            //     fieldToUpdate.key = keyvalue;
            // }

            const updatedGadget = await findGadget.save();

            const response = { success: true, data: updatedGadget, message: "Gadget Details" };
            return res.status(200).json(response);
        } catch (error) {
            const response = { success: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    deleteGadgetCategory: async function (req, res) {
        try {
            const id = req.body.id;
            const seller = req.seller;

            const findGadget = await GadgetCategoryModel.findOne({ _id: id });
            if (!findGadget) {
                const response = { success: false, message: "Gadget Not Found" };
                return res.status(404).json(response);
            }

            // console.log(findGadget.sellerId);
            // console.log(findGadget.sellerId);
            // console.log((findGadget.sellerId).toString() != (seller._id).toString())
            if((findGadget.sellerId).toString() != (seller._id).toString()){
                const response = { success: false, message: "You Not Eligable For Delete" };
                return res.status(400).json(response);
            }

            await GadgetCategoryModel.findByIdAndDelete({_id:findGadget._id});

            const response = { success: true, message: "Gadget Deleted Successfully" };
            return res.status(200).json(response);
        } catch (error) {
            const response = { success: false, message: error.message };
            return res.status(500).json(response);
        }
    }
}

module.exports = MobileController