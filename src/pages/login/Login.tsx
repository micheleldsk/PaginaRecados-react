import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MeuButton } from '../../components/button/MeuButton';
import MeuInput from '../../components/input/MeuInput';
import styled from '@emotion/styled';
import User from '../../components/global-types/TUser';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { MeuAlert, MeuAlertProps } from '../../components/alert/MeuAlert';

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

export const PaperBox = styled(Paper) (() => ({
    display: 'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    }));

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState<MeuAlertProps>({texto: ''})

    const allUsers = JSON.parse(localStorage.getItem('usuarios') || '[]')

    const navigate = useNavigate();

    function Logar() {
        const existeEmail = allUsers.findIndex((valor: User) => valor.email === email && valor.password === password)

            if(!email) {
                setAlert ({texto:'Por favor digite seu E-mail.', severity:'warning'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                return
                // alert('Por favor digite seu E-mail.')
            }
            if(!password) {
                setAlert ({texto:'Por favor digite sua senha.', severity:'warning'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                return
                // alert('Por favor digite sua senha.')
            }
    
            if(existeEmail < 0) {
                setAlert ({texto:'Verifique os dados ou cadastre-se.', severity:'error'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                return
                // alert('Verifique os dados ou cadastre-se.')   
            }

        const usuarioLogado: Partial<User> = {
            id: allUsers[existeEmail].id,
        } 

        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
        return navigate('/recados')
    }

    return (
        <>
        {alert.texto && (<MeuAlert texto={alert.texto} severity={alert.severity}/>)}
        <ContainerLogin container xs={12}>
            <Grid item xs={6} md={3} sx={{mr: 13}}>
                <PaperBox elevation={24}>
                    <Typography variant='h4' align='center' sx={{ fontSize:'clamp(1.5rem, 2vw, 2rem)'}}>Faça seu Login</Typography>
                    
                    <MeuInput variant='outlined' label='E-mail' type='email' placeholder='E-mail'
                            color='primary' size='medium' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <MeuInput variant='outlined' label='Senha' type='password' placeholder='Senha'
                            color='primary' size='medium' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    
                    <MeuButton variant='contained' color='primary' size='medium' texto='ENTRAR' onClick={Logar}/>
                    
                    <Link to='/cadastro'>Cadastre-se</Link>                
                </PaperBox>
            </Grid>
        </ContainerLogin>
        </>

    );
};