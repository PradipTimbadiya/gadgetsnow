const RoleModel = require('../models/role.model');

const RoleController = {
    addRole : async function(req,res) {
        try {
            const { role,permissions} = req.body;

            const findRole = await RoleModel.findOne({role:role});
            if(findRole)
            {
                const response = { success:false , message: "Role Is Already Exists"};
                return res.status(400).json(response);
            }

            const addRole = new RoleModel({role,permissions});
            await addRole.save();

            const response = { success:true , message: "Role Is Added Successfully"};
            return res.status(201).json(response);
        } catch (error) {
            const response = { success:false , message: error.message};
            return response.status(500).json(response);
        }
    },
    getAllRole : async function(req,res) {
        try {

            const findRole = await RoleModel.find();
            if(findRole.length == 0)
            {
                const response = { success:false , message: "Not Role is Exists"};
                return res.status(404).json(response);
            }

            const response = { success:true ,data:findRole, message: `${findRole.role} Role Details`};
            return res.status(200).json(response);
        } catch (error) {
            const response = { success:false , message: error.message};
            return res.status(500).json(response);
        }
    },
    getPerticularRole : async function(req,res) {
        try {
            const roleId = req.params.id;
            console.log(req.params.id);
            const findRole = await RoleModel.findById(roleId);
            if(!findRole)
            {
                const response = { success:false , message: "Role Is Not Exists"};
                return res.status(404).json(response);
            }

            const response = { success:true ,data:findRole, message: `${findRole.role} Role Details`};
            return res.status(200).json(response);
        } catch (error) {
            const response = { success:false , message: error.message};
            return res.status(500).json(response);
        }
    },
    updateRole : async function(req,res) {
        try {
            const roleId = req.params.id;
            const data = req.body;
            const findRole = await RoleModel.findById(roleId);
            if(!findRole)
            {
                const response = { success:false , message: "Role Is Not Exists"};
                return res.status(404).json(response);
            }

            const permissions = [];

            for(let i=0; i<findRole.permissions.length ; i++)
            {
                permissions.push(findRole.permissions[i]);
            }

            for(let i=0; i<data.permissions.length ; i++)
            {
                if(!permissions.includes(data.permissions[i]))
                {
                    permissions.push(data.permissions[i])
                }
            }

            data.permissions = permissions;

            const updateRole = await RoleModel.findByIdAndUpdate({_id:roleId},{$set:{...data}},{new:true});

            const response = { success:true ,data:updateRole, message: `${findRole.role} Role Details`};
            return res.status(200).json(response);
        } catch (error) {
            const response = { success:false , message: error.message};
            return res.status(500).json(response);
        }
    },
    deleteRole : async function(req,res) {
        try {
            const roleId = req.params.id;

            const findRole = await RoleModel.findById(roleId);
            if(!findRole)
            {
                const response = { success:false , message: "Role Is Not Exists"};
                return res.status(404).json(response);
            }

            await RoleModel.findByIdAndDelete(roleId);
        

            const response = { success:true ,message: "Role Deleted Successfully"};
            return res.status(200).json(response);
        } catch (error) {
            const response = { success:false , message: error.message};
            return res.status(500).json(response);
        }
    },
    deletePermission : async function(req,res) {
        try {
            const roleId = req.params.id;
            const permission = req.body.permission;

            const findRole = await RoleModel.findById(roleId);
            if(!findRole)
            {
                const response = { success:false , message: "Role Is Not Exists"};
                return res.status(404).json(response);
            }

            const updatedPermissions = findRole.permissions.filter((permissions)=>{
   
                if(!permission.includes(permissions))
                {
                    return permissions
                }   
            })

            const updatePermission = await RoleModel.findByIdAndUpdate({_id:roleId},{$set:{permissions:updatedPermissions}},{new:true});

            const response = { success:true ,data:updatePermission,message: "Permission Deleted Successfully"};
            return res.status(200).json(response);
        } catch (error) {
            const response = { success:false , message: error.message};
            return res.status(500).json(response);
        }
    }
}

module.exports = RoleController;