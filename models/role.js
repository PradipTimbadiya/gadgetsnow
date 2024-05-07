const mongoose = require('mongoose');

const permissions = [
    "view",
    "delete",
    "edit",
    "create"
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
