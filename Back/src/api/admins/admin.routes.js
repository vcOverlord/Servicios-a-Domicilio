const AdminRoutes = require("express").Router();
const { authorize } = require("../../middlewares/auth.admin");

const { getAllAdmins, register, login, adminById, update, remove  } = require("./admin.controller");

AdminRoutes.get('/', getAllAdmins);
AdminRoutes.post('/register', register);
AdminRoutes.post('/login', login);
AdminRoutes.get('/:id', [authorize], adminById);
AdminRoutes.patch('/:id', [authorize],update);
AdminRoutes.delete('/:id', [authorize], remove);

module.exports = AdminRoutes;