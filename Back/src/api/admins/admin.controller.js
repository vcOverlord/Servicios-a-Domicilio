const Admin = require('./admin.model');
const bcrypt = require("bcrypt");
const { createToken } = require("../../helpers/token.action");
const { setError } = require("../../helpers/errors");


const getAllAdmins = async (req, res, next) => {
    try {
        const admins = await Admin.find().populate("usuarios citas");
        return res.status(200).json({
            message: 'All Admins',
            admins
        })
    } catch (error) {
        return next(setError(500, error.message | 'Failed recovering all admins'));
    }
};

const adminById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id != req.admin.id) return next(setError(403, "Forbidden"));
        const admin = await Admin.findById(id).populate("usuarios citas");
        if (!admin) return next(setError(404, "Admin not found"));
        return res.status(200).json(admin);
    } catch (error) {
        return next(setError(500, error.message || 'Failed recovering Admin'));
        }
};

const register = async (req, res, next) => {
    try {
        const newAdmin = new Admin(req.body);
        const adminNameExist = await Admin.findOne({ name: newAdmin.name });
        const emailExist = await Admin.findOne({ email: newAdmin.email });
        if (emailExist || adminNameExist) return next(setError(409, "this Email || Admin name already exist"));
        const adminInDb = await newAdmin.save();
        res.status(201).json(adminInDb);
    } catch (error) {
        return next(setError(500, error.message || 'Failed creating Admin'));
    }
};

const login = async (req, res, next) => {
    try {
      const adminInDb = await Admin.findOne({ email: req.body.email });
      if (!adminInDb) return next(setError(404, "Admin not found"));

      if (bcrypt.compareSync(req.body.password, adminInDb.password)) {
        const token = createToken(adminInDb._id, adminInDb.email);
        return res.status(200).json({ adminInDb, token })
      } else {
        return next(setError(401, "Invalid Password"));
      }
    } catch (error) {
      return next(setError(500, error.message || 'Unexpected error login'));
    }
};

const update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const admin = new Admin(req.body);
      admin._id = id;
      if(req.file) {
        admin.email = req.file.path
      }
      const updatedAdmin = await Admin.findByIdAndUpdate(id, admin);
      if (!updatedAdmin) {
         return next(setError(404, 'Admin not found'));
      } 
         return res.status(201).json({
         message: 'Updated Admin',
         updatedAdmin,
      });
  
    } catch (error) {
      return next(
        setError(500, error.message | 'Failed updated admin')
      );
    }
  };

const remove = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedAdmin = await Admin.findByIdAndDelete(id);
      if (!deletedAdmin) return next(setError(404, 'Admin not found'));
      return res.status(200).json({
        message: 'Delete Admin',
        deletedAdmin
      })
    } catch (error) {
      return next(setError(500, error.message | 'Failed deleted admin'));
    }
  };

  module.exports = { 
    getAllAdmins, 
    register, 
    login, 
    adminById, 
    update, 
    remove 
};