import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './Componentes/Home/Home';
import HomeUser from './Componentes/HomeUser/HomeUser';


export default function App() {
  return (
    <div className='tudo'>
    <Helmet>
      <meta charSet='utf-8'/>
      <title>FeedWorld</title>
    </Helmet>
    

      <BrowserRouter>
        <Routes>

          {/* COMPONENTES INTEGRADOS */}
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/homeuser' element={<HomeUser/>}/>
          {/* <Route path='/fase1/*' element={<Fase1/>}/>
          <Route path='/fase2/*' element={<Fase2/>}/>
          <Route path='/fase3/*' element={<Fase3/>}/>
          <Route path='/quemsomos' element={<Sobre/>}/> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}


