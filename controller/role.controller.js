const RoleModel = require('../models/role.model');

const RoleController = {
    addRole: async function (req, res) {
        try {
            const { role, permissions } = req.body;

            const findRole = await RoleModel.findOne({ role: role });
            if (findRole) {
                const response = { success: false, message: "Role Is Already Exists" };
                return res.status(400).json(response);
            }

            const addRole = new RoleModel({ role, permissions });
            await addRole.save();

            const response = { success: true, message: "Role Is Added Successfully" };
            return res.status(201).json(response);
        } catch (error) {
            const response = { success: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    getAllRole: async function (req, res) {
        try {

            const findRole = await RoleModel.find();
            if (findRole.length == 0) {
                const response = { success: false, message: "Not Role is Exists" };
                return res.status(404).json(response);
            }

            const response = { success: true, data: findRole, message: `${findRole.role} Role Details` };
            return res.status(200).json(response);
        } catch (error) {
            const response = { success: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    getPerticularRole: async function (req, res) {
        try {
            const roleId = req.params.id;

            const findRole = await RoleModel.findById(roleId);
            if (!findRole) {
                const response = { success: false, message: "Role Is Not Exists" };
                return res.status(404).json(response);
            }

            const response = { success: true, data: findRole, message: `${findRole.role} Role Details` };
            return res.status(200).json(response);
        } catch (error) {
            const response = { success: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    updateRole: async function (req, res) {
        try {
            const roleId = req.params.id;
            const data = req.body;
            const findRole = await RoleModel.findById(roleId);
            if (!findRole) {
                const response = { success: false, message: "Role Does Not Exist" };
                return res.status(404).json(response);
            }
    
            for (let i = 0; i < data.permissions.length; i++) {
                const permission = data.permissions[i];
                
                const existingPermissionIndex = findRole.permissions.findIndex(p => p.name === permission.name);
                
                if (existingPermissionIndex !== -1) {

                    const existingPermission = findRole.permissions[existingPermissionIndex];
                    
                    permission.route.forEach(route => {
                        if (!existingPermission.route.includes(route)) {
                            existingPermission.route.push(route);
                        }
                    });
                } else {
      
                    findRole.permissions.push(permission);
                }
            }
    
           
            const updatedRole = await RoleModel.findByIdAndUpdate(roleId, { permissions: findRole.permissions }, { new: true });
    
            const response = { success: true, data: updatedRole, message: `${findRole.role} Role Details Updated` };
            return res.status(200).json(response);
        } catch (error) {
            const response = { success: false, message: error.message };
            return res.status(500).json(response);
        }
    },    
    deleteRole: async function (req, res) {
        try {
            const roleId = req.params.id;

            const findRole = await RoleModel.findById(roleId);
            if (!findRole) {
                const response = { success: false, message: "Role Is Not Exists" };
                return res.status(404).json(response);
            }

            await RoleModel.findByIdAndDelete(roleId);


            const response = { success: true, message: "Role Deleted Successfully" };
            return res.status(200).json(response);
        } catch (error) {
            const response = { success: false, message: error.message };
            return res.status(500).json(response);
        }
    },
    deletePermission: async function (req, res) {
        try {
            const roleId = req.params.id;
            const { permissionName, route } = req.body;
            const findRole = await RoleModel.findById(roleId);
            if (!findRole) {
                const response = { success: false, message: "Role Does Not Exist" };
                return res.status(404).json(response);
            }
    
            const permissionIndex = findRole.permissions.findIndex(p => p.name === permissionName);
            if (permissionIndex === -1) {
                const response = { success: false, message: `Permission "${permissionName}" Not Found for Role ${findRole.role}` };
                return res.status(404).json(response);
            }
    
            if (route) {
                const permission = findRole.permissions[permissionIndex];
                if (Array.isArray(route)) {
                    route.forEach(r => {
                        const routeIndex = permission.route.indexOf(r);
                        if (routeIndex !== -1) {
                            permission.route.splice(routeIndex, 1);
                        }
                    });
                } else {
                    const routeIndex = permission.route.indexOf(route);
                    if (routeIndex !== -1) {
                        permission.route.splice(routeIndex, 1);
                    }
                }
            } else {
                findRole.permissions.splice(permissionIndex, 1);
            }
            
    
            const updatedRole = await RoleModel.findByIdAndUpdate(roleId, { permissions: findRole.permissions }, { new: true });
    
            const response = { success: true, data: updatedRole, message: `${findRole.role} Role Details Updated` };
            return res.status(200).json(response);
        } catch (error) {
            const response = { success: false, message: error.message };
            return res.status(500).json(response);
        }
    }
    
}

module.exports = RoleController;