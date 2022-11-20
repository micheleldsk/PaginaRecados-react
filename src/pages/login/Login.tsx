import { Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MeuButton } from '../../components/button/MeuButton';
import { MeuInput } from '../../components/input/Meuinput';
import styled from '@emotion/styled';
import User from '../../components/global-types/TUser';

const ContainerLogin = styled(Grid) (() => ({
display: 'flex',
justifyContent: 'flex-end',
alignItems: 'center',
width: '100vw',
height: '100vh',
backgroundImage: 'url(https://free4kwallpapers.com/uploads/originals/2016/06/13/popular-penguin-4k-wallpaper.jpg)',
backgroundSize: 'cover',
backgroundPosition: 'center',
}));

const PaperBox = styled(Paper) (() => ({
    display: 'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    }));

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const allUsers = JSON.parse(localStorage.getItem('usuarios') || '[]')
    const existeEmail = allUsers.some((valor: User) => valor.email === email && valor.password === password)

    const navigate = useNavigate();

    function Logar() {
        if(!email) {
            alert('Por favor digite seu E-mail.')
            return
        }
        if(!password) {
            alert('Por favor digite sua senha.')
            return
        }

        if(!existeEmail) {
            alert('Verifique os dados ou cadastre-se.')
            return
        }

        const usuarioLogado: User = {
            email: allUsers[existeEmail].email, 
            password: allUsers[existeEmail].password, 
            messages: []
        } 

        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
        return navigate('/recados')
    }

    return (
        <ContainerLogin container xs={12}>
            <Grid item xs={6} md={3} sx={{mr: 13}}>
                <PaperBox elevation={24}>
                    <Typography variant='h4' align='center'>Faça seu Login</Typography>
                    
                    <MeuInput variant='outlined' label='E-mail' type='email' placeholder='E-mail'
                            color='primary' size='medium' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <MeuInput variant='outlined' label='Senha' type='password' placeholder='Senha'
                            color='primary' size='medium' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    
                    <MeuButton variant='contained' color='primary' size='medium' texto='ENTRAR' onClick={Logar}/>
                    
                    <Link to='/cadastro'>Cadastre-se</Link>                
                </PaperBox>
            </Grid>
        </ContainerLogin>
    );
};