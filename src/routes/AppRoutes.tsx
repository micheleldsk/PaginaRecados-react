import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cadastro } from '../pages/cadastro/Cadastro';
import { Login } from '../pages/login/Login';
import { Recados } from '../pages/recados/Recados';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/recados" element={<Recados />} />     
            <Route path="*" element={<h1>Página não encontrada</h1>} />
          </Routes>
        </BrowserRouter>
    );
};