const UsuarioRoutes = require("express").Router();
const { authorize } = require("../../middlewares/auth");



const { getAllUsuarios, register, login, usuarioById, update, remove  } = require("./usuario.controller");

UsuarioRoutes.get('/', getAllUsuarios);
UsuarioRoutes.post('/register', register);
UsuarioRoutes.post('/login',login);
UsuarioRoutes.get('/:id', [authorize], usuarioById);
UsuarioRoutes.patch('/:id', [authorize], update);
UsuarioRoutes.delete('/:id', [authorize], remove);

module.exports = UsuarioRoutes;