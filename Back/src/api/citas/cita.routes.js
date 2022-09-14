const CitaRoutes = require("express").Router();
const { authorize } = require("../../middlewares/auth");



const {  getAllCitas, createCita, citaById, update, remove  } = require("./cita.controller");

CitaRoutes.get('/', getAllCitas);
CitaRoutes.post('/create', createCita);
CitaRoutes.get('/:id', [authorize], citaById);
CitaRoutes.patch('/:id', [authorize], update);
CitaRoutes.delete('/:id', [authorize], remove);

module.exports = CitaRoutes;