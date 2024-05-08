const mongoose = require('mongoose');

const permissions = [
    "find-gadget-category",
    "delete-gadget",
    "update-gadget",
    "create-gadget-category",
    "add-specification-incategory",
    "add-role",
    "getall-role",
    "getperticular-role",
    "update-role",
    "delete-role"
];

const roleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        unique: true
    },
    permissions: {
        type: [{
            type: String,
            enum: permissions
        }],
        default: []
    }
});

const RoleModel = mongoose.model('Role', roleSchema);

module.exports = RoleModel;
