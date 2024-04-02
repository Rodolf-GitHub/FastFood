//import bcrypt from "bcryptjs";
const jwt =require ("jsonwebtoken")
// user.controller.js
const  User  = require('../models/userModels');
const sequelize = require('../database/database');
const logger = require('../loggers/loggers');
class UserController {
  async getAllUsers(req, res) {
    try {
      console.log("get controller")
      console.log(User)
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ message: 'Error al obtener usuarios' });
    }
  }

  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      res.status(500).json({ message: 'Error al obtener usuario por ID' });
    }
  }
  async createUser(req, res) {
    const userData =await req.body;
    console.log("userdata:",userData)
    try {
      const newUser = await User.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ message: 'Error al crear usuario' });
    }
  }
  
  async updateUser(req, res) {
    const { id } = req.params;
    const userData = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      res.status(500).json({ message: 'Error al actualizar usuario' });
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ message: 'Error al eliminar usuario' });
    }
  }


async  loginUser(req, res) {

  const { username, password }  = req.body;
  const user = await User.findOne({where:{username}})
 
  try {
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }
    
    var validPassword = false 
    // validPassword =  bcrypt.compare(password, user.password); // Comparar contraseñas desencriptando la almacenada
    if(password===user.password){validPassword=true}//activar esto para pruebas
    
    if (!validPassword) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }
    
const accesToken=await generateAccessToken(username)
res.status(200).json({ message: "inicio de sesion exitoso",token:accesToken });

  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
}



}
async function generateAccessToken(username) {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const accessToken = jwt.sign({ user }, process.env.SECRET, { expiresIn: '10h' });
    
    return accessToken;
  } catch (error) {
    console.error('Error al generar token de acceso:', error);
    throw error;
  }
}
module.exports = UserController;
