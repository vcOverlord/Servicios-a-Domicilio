const Cita = require('./cita.model');
const { setError } = require("../../helpers/errors");



const getAllCitas = async (req, res, next) => {
    try {
        
        const citas = await Cita.find().populate("usuarios admins").sort({ createdAt: "desc" });
        return res.status(200).json({
            message: 'All Citas',
            citas
        });
    } catch (error) {
        return next(setError(500, error.message | 'Failed recovering all citas'));
    }
};

const citaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cita = await Cita.findById(id).populate("usuarios admins");
        if (!cita) {
          return next(setError(404, "Cita not found"))  
        } return res.status(200).json ({
          message: "Cita by Id",
          cita
        })
    } catch (error) {
        return next(setError(500, error.message || 'Failed recovering cita by Id'));
        }
};

const createCita = async (req, res, next) => {
  try {
    const cita = new Cita (req.body);
    
    const citaInDB = await cita.save();
    return res.status (201).json({
      message: "Cita created",
      citaInDB,
    });
  } catch (error) {
    return next(
      setError(500, error.message | "Failed creating cita")
    );
  }
};


const update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const cita = new Cita(req.body);
      cita._id = id;
      if(req.file) {
        cita.fecha = req.file.path
      }
      const updatedCita = await Cita.findByIdAndUpdate(id, cita);
      if (!updatedCita){
        return next(setError(404, 'Cita not found'));
      } return res.status(201).json({
        message: 'Updated Cita',
        updatedCita
      })
  
    } catch (error) {
      return next(setError(500, error.message | 'Failed updated cita'));
    }
  };

const remove = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedCita = await Cita.findByIdAndDelete(id);
      if (!deletedCita) return next(setError(404, 'Cita not found'));
      return res.status(200).json({
        message: 'Delete Cita',
        deletedCita
      })
    } catch (error) {
      return next(setError(500, error.message | 'Failed deleted cita'));
    }
  };

  

  module.exports = { 
    getAllCitas, 
    createCita, 
    citaById, 
    update, 
    remove 
};