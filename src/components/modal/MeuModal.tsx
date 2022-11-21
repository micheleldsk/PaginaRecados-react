import { Modal, Typography, Paper } from '@mui/material'
import { MeuButton } from '../button/MeuButton';
import { MeuInput } from '../input/Meuinput';
import { useState } from 'react';

type ModalProps = {
    open: boolean,
    type: string,
    setOpen?: any,
};

export const MeuModal = (props: ModalProps)  => {
    const [titulo, setTitulo] = useState('')
    const [mensagem, setMensagem] = useState('')
    function handleClose () {
        console.log('feshow!!!');   
    }
    return (
        <Modal open={props.open} onClose={handleClose} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Paper elevation={24} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '40Vw', padding: '20px 0'}}>
        {props.type === 'criar' && (
            <>
            <Typography variant='h4' align='center'>Nova Mensagem</Typography>
                    
            <MeuInput variant='outlined' label='Título' type='text' placeholder='Título'
                      color='primary' size='medium' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
            <MeuInput variant='outlined' label='Mensagem' type='text' placeholder='Mensagem'
                      color='primary' size='medium' value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
                    
            <MeuButton variant='contained' color='success' size='medium' texto='SALVAR'/>
            <MeuButton variant='contained' color='error' size='medium' texto='CANCELAR'/>               
            </>
        )}
        {props.type === 'editar' && (
            <>
            <Typography variant='h4' align='center'>Editando Mensagem</Typography>
                    
            <MeuInput variant='outlined' label='Título' type='text' placeholder='Título'
                      color='primary' size='medium' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
            <MeuInput variant='outlined' label='Mensagem' type='text' placeholder='Mensagem'
                      color='primary' size='medium' value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
                    
            <MeuButton variant='contained' color='success' size='medium' texto='SALVAR'/>
            <MeuButton variant='contained' color='error' size='medium' texto='CANCELAR'/>               
            </>
        )}
        {props.type === 'apagar' && (
            <>
            <Typography variant='h4' align='center'>ALERTA: A Mensagem será excluída!</Typography>  
            <MeuButton variant='contained' color='success' size='medium' texto='CONFIRMAR'/>
            <MeuButton variant='contained' color='error' size='medium' texto='CANCELAR'/>            
            </>
        )}

        </Paper>
        </Modal>
    );
};