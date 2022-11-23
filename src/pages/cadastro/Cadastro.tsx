import { Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MeuButton } from '../../components/button/MeuButton';
import { MeuInput } from '../../components/input/MeuInput';
import styled from '@emotion/styled';
import User from '../../components/global-types/TUser';
import { v4 } from 'uuid';
import { MeuAlert, MeuAlertProps } from '../../components/alert/MeuAlert';

const ContainerCadastro = styled(Grid) (() => ({
display: 'flex',
alignItems: 'center',
width: '100vw',
height: '100vh',
backgroundImage: 'url(https://images2.alphacoders.com/123/1237285.jpg)',
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

export const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [alert, setAlert] = useState<MeuAlertProps>({texto: ''})

    const allUsers = JSON.parse(localStorage.getItem('usuarios') || '[]')
    const existeEmail = allUsers.some((valor: User) => valor.email === email)

    const navigate = useNavigate();

    function Cadastrar() {
        if(!email) {
            setAlert ({texto:'Por favor digite seu E-mail.', severity:'info'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                return
        }
        if(!password) {
            setAlert ({texto:'Por favor digite sua senha.', severity:'info'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                return
        }
        if (password !== rePassword) {
            setAlert ({texto:'As senhas não conferem.', severity:'warning'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                return
        }

        if(existeEmail){
            setAlert ({texto:'Email já cadastrado.', severity:'error'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                return
        }

        const newUser: User = {
            id: v4(),
            email: email, 
            password: password,
        }

        allUsers.push(newUser)
        localStorage.setItem('usuarios', JSON.stringify(allUsers))
        setAlert ({texto:'Conta cadastrada com SUCESSO!', severity:'success'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                setTimeout(() => {
                    return navigate('/')
                }, 2100);      
    }

    return (
        <>
        {alert.texto && (<MeuAlert texto={alert.texto} severity={alert.severity}/>)}
        <ContainerCadastro container xs={12}>
            <Grid item xs={6} md={3} sx={{ml: 13}}>
                <PaperBox elevation={24}>
                    <Typography variant='h4' align='center' sx={{ fontSize:'clamp(1.5rem, 2vw, 2rem)'}}>Cadastre-se</Typography>
                    
                    <MeuInput variant='outlined' label='E-mail' type='email' placeholder='E-mail'
                            color='primary' size='medium' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <MeuInput variant='outlined' label='Senha' type='password' placeholder='Senha'
                            color='primary' size='medium' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <MeuInput variant='outlined' label='Repetir senha' type='password' placeholder='Repetir senha'
                            color='primary' size='medium' value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>        
                    
                    <MeuButton variant='contained' color='primary' size='medium' texto='CADASTRAR' onClick={Cadastrar}/>
                    
                    <Link to='/'>Já possui conta?</Link>                
                </PaperBox>
            </Grid>
        </ContainerCadastro>
        </>  
    );
};