import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MeuButton } from '../../components/button/MeuButton';
import { MeuInput } from '../../components/input/Meuinput';
import { MeuHeader } from '../../components/header/MeuHeader';
import styled from '@emotion/styled';
import MeuRecado from '../../components/meuRecado/MeuRecado';
import { MeuModal } from '../../components/modal/MeuModal';
import { useSelector } from 'react-redux';
import { msgSelectAll } from '../../store/msgSlice';

const ContainerRecadosPage = styled(Grid) (() => ({
display: 'flex',
width: '100vw',
height: '100vh',
backgroundImage: 'url(https://images3.alphacoders.com/893/893249.png)',
backgroundSize: 'cover',
backgroundPosition: 'center',
}));

export const Recados = () => {
    const {showModalMsg} = useSelector(msgSelectAll)
    return (
        <>
        <ContainerRecadosPage container xs={12}>
            <MeuHeader />
            <Grid item xs={12} md={12}>
                <MeuRecado />
            </Grid>
        </ContainerRecadosPage>
        <MeuModal open={showModalMsg.open} type={showModalMsg.type} />
        </>  
    );
};