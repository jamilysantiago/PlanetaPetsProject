import React from 'react';
import Routering from '../App'
import UserServices from '../components/Form/UserService';

const userService = new UserServices();

const ProtectedRoutes = ({children}) => {
  const usuarioAutenticado = userService.usuarioAutenticado()
  console.log('usuarioAutenticado', usuarioAutenticado)
  return usuarioAutenticado ? children : <Routering/>
}
 
export default ProtectedRoutes;