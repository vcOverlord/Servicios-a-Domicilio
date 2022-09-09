const Usuario = require("../api/usuarios/usuario.model");
const { verifyToken } = require("../helpers/token.action");
const { setError } = require("../helpers/errors");

const authorize = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return next(setError(401, "Unauthorize"));
    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyToken(parsedToken, process.env.JWT_SECRET);
    if (!validToken) return next(setError(401, "Unauthorize"));
    const usuario = await Usuario.findById(validToken.id);
    delete usuario.password;
    req.usuario = usuario;
    next();
  } catch (error) {
    return next(setError(401, 'Unathorize'));
  }
}

module.exports = { authorize }