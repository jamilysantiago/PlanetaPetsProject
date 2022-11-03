import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import AdoteformCards from './routes/AdoteForm'
import Adote from './routes/Adote';
import Login from './routes/Login'
import Cadastro from './routes/Cadastro'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AdoteForm' element={<AdoteformCards />} />
        <Route path='/adote' element={<Adote />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </>
  );
}

export default App;
