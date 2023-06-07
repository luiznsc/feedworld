import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './Componentes/Home/Home';
import HomeUser from './Componentes/HomeUser/HomeUser';
import CadastroTela from './Componentes/Cadastro/CadastroTela';
import Login from './Componentes/Login/Login';
import MeuGerenciamento from './Componentes/MeuGerenciamento/MeuGerenciamento';
import Duvidas from './Componentes/Duvidas/Duvidas';
import Secao1 from './Componentes/Secoes/Secao1';
import Secao2 from './Componentes/Secoes/Secao2';
import Secao3 from './Componentes/Secoes/Secao3';

export default function App() {
  return (
    
    <div className='tudo'>
    <Helmet>
      <meta charSet='utf-8'/>
      <title>FeedWorld</title>
    </Helmet>
  
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/homeuser' element={<HomeUser/>}/>
          <Route path='/meugerenciamento' element={<MeuGerenciamento/>}/>
          <Route path='/login' element={<Login/>}/>   
          <Route path='/cadastro' element={<CadastroTela/>}/>
          <Route path='/duvidas' element={<Duvidas/>}/>
          <Route path='/secao1' element={<Secao1/>}/>
          <Route path='/secao2' element={<Secao2/>}/>
          <Route path='/secao3' element={<Secao3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


