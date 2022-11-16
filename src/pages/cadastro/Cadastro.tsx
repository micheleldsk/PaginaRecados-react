import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MeuButton } from '../../components/button/MeuButton';
import { MeuInput } from '../../components/input/Meuinput';
import styled from '@emotion/styled';

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
    return (
        <ContainerCadastro container xs={12}>
            <Grid item xs={6} md={3} sx={{ml: 13}}>
                <PaperBox elevation={24}>
                    <Typography variant='h4' align='center'>Cadastre-se</Typography>
                    
                    <MeuInput variant='outlined' label='E-mail' type='email' placeholder='E-mail'
                            color='primary' size='medium' value={'email@email.com'} />
                    <MeuInput variant='outlined' label='Senha' type='password' placeholder='Senha'
                            color='primary' size='medium' value={'Senha'} />
                    <MeuInput variant='outlined' label='Repetir senha' type='password' placeholder='Repetir senha'
                            color='primary' size='medium' value={'Senha'} />        
                    
                    <MeuButton variant='outlined' color='primary' size='medium' texto='CADASTRAR'/>
                    
                    <Link to='/'>Já possui conta?</Link>                
                </PaperBox>
            </Grid>
        </ContainerCadastro>
    );
};