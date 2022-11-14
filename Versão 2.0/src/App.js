import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import AdoteformCards from './routes/AdoteForm'
import Adote from './routes/Adote';
import Login from './routes/Login'
import Cadastro from './routes/Cadastro'
import ProtectedRoutes from './routes/ProtectedRoutes'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adote' element={<Adote />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/adoteform' element={
          <ProtectedRoutes>
            <h1>teste</h1>
          </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
