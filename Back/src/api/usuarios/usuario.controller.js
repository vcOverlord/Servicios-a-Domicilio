const Usuario = require('./usuario.model');
const bcrypt = require("bcrypt");
const { createToken } = require("../../helpers/token.action");
const { setError } = require("../../helpers/errors");

const getAllUsuarios = async (req, res, next) => {
    try {
        const usuarios = await Usuario.find().populate("citas");
        return res.status(200).json({
            message: 'All Usuarios',
            usuarios
        })
    } catch (error) {
        return next(setError(500, error.message | 'Failed recovering all usuarios'));
    }
};

const usuarioById = async (req, res, next) => {
  try {
      const { id } = req.params;
      if (id != req.usuario.id) return next(setError(403, "Forbidden"));
      const usuario = await Usuario.findById(id).populate("citas");
      if (!usuario) return next(setError(404, "Usuario not found"));
      return res.status(200).json(usuario);
  } catch (error) {
      return next(setError(500, error.message || 'Failed recovering usuarios'));
      }
};

const register = async (req, res, next) => {
  try {
      const newUsuario = new Usuario(req.body);
   //   const usuarioNameExist = await Usuario.findOne({ name: newUsuario.name });
   //   const emailExist = await Usuario.findOne({ email: newUsuario.email });
   //   if (emailExist || usuarioNameExist) return next(setError(409, "this Email || Usuario name already exist"));
      const usuarioInDb = await newUsuario.save();
      res.status(201).json(usuarioInDb);
  } catch (error) {
      return next(setError(500, error.message || 'Failed creating usuario'));
  }
};

const login = async (req, res, next) => {
  try {
    const usuarioInDb = await Usuario.findOne({ email: req.body.email });
    if (!usuarioInDb) return next(setError(404, "Usuario not found"));

    if (bcrypt.compareSync(req.body.password, usuarioInDb.password)) {
      const token = createToken(usuarioInDb._id, usuarioInDb.email);
      return res.status(200).json({ usuarioInDb, token })
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
      const usuario = new Usuario(req.body);
      usuario._id = id;
      if(req.file) {
        usuario.dirección = req.file.path
      }
      const updatedUsuario = await Usuario.findByIdAndUpdate(id, usuario);
      if (!updatedUsuario) return next(setError(404, 'Usuario not found'));
      return res.status(201).json({
        message: 'Updated Usuario',
        updatedUsuario
      })
  
    } catch (error) {
      return next(setError(500, error.message | 'Failed updated usuario'));
    }
  };

const remove = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedUsuario = await Usuario.findByIdAndDelete(id);
      if (!deletedUsuario) return next(setError(404, 'Usuario not found'));
      return res.status(200).json({
        message: 'Delete Usuario',
        deletedUsuario
      })
    } catch (error) {
      return next(setError(500, error.message | 'Failed deleted usuario'));
    }
  };

  module.exports = { 
    getAllUsuarios, 
    register, 
    login, 
    usuarioById, 
    update, 
    remove 
};