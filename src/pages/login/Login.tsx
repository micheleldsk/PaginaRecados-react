import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MeuButton } from '../../components/button/MeuButton';
import { MeuInput } from '../../components/input/Meuinput';
import styled from '@emotion/styled';

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
    return (
        <ContainerLogin container xs={12}>
            <Grid item xs={6} md={3} sx={{mr: 13}}>
                <PaperBox elevation={24}>
                    <Typography variant='h4' align='center'>Faça seu Login</Typography>
                    
                    <MeuInput variant='outlined' label='E-mail' type='email' placeholder='E-mail'
                            color='primary' size='medium' value={'email@email.com'} />
                    <MeuInput variant='outlined' label='Senha' type='password' placeholder='Senha'
                            color='primary' size='medium' value={'Senha'} />
                    
                    <MeuButton variant='outlined' color='primary' size='medium' texto='ENTRAR'/>
                    
                    <Link to='/cadastro'>Cadastre-se</Link>                
                </PaperBox>
            </Grid>
        </ContainerLogin>
    );
};