const CitaRoutes = require("express").Router();




const {  getAllCitas, createCita, citaById, update, remove  } = require("./cita.controller");

CitaRoutes.get('/', getAllCitas);
CitaRoutes.post('/create', createCita);
CitaRoutes.get('/:id', citaById);
CitaRoutes.patch('/:id', update);
CitaRoutes.delete('/:id', remove);

module.exports = CitaRoutes;