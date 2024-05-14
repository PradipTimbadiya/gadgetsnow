const mongoose = require('mongoose');

const permissions = [
    "/gadget/find-gadget-category",
    "/gadget/delete-gadget",
    "/gadget/update-gadget",
    "/gadget/create-gadget-category",
    "/gadget/add-specification-incategory",
    "/role/add-role",
    "/role/getall-role",
    "/role/getperticular-role",
    "/role/update-role",
    "/role/delete-role",
    "/review/add-review"
];

const roleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        unique: true
    },
    permissions: [{
        name: String,
        route: [{
            type: String,
            enum: permissions,
            default: []
        }],
    }]
});

const RoleModel = mongoose.model('Role', roleSchema);

module.exports = RoleModel;
