import { Modal, Typography, Paper } from '@mui/material'
import { MeuButton } from '../button/MeuButton';
import { MeuInput } from '../input/MeuInput';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMsg, deleteMsg, editMsg, msgSelectAll, resetModalMsg, resetSelectId } from '../../store/msgSlice';
import { MeuAlert, MeuAlertProps } from '../alert/MeuAlert';
import Message from '../global-types/TMessage';
import { v4 } from 'uuid';
import { useRevalidator } from 'react-router-dom';
import { findMsgById } from './utils/findMsgById';

type ModalProps = {
    open: boolean,
    type: string,
    setOpen?: any,
    setAlert?: React.Dispatch<React.SetStateAction<MeuAlertProps>>
};

export const MeuModal = (props: ModalProps)  => {
    const dispatch = useDispatch()
    const msgRedux = useSelector(msgSelectAll)

    const [titulo, setTitulo] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [editTitulo, setEditTitulo] = useState('')
    const [editMensagem, setEditMensagem] = useState('')
    const [alert, setAlert] = useState<MeuAlertProps>({texto: ''})
    
    const userId = JSON.parse(localStorage.getItem('usuarioLogado')!)

    useEffect(() => {
        if (msgRedux.selectId) {
            const tempMsg = findMsgById(msgRedux.selectId, msgRedux.msgList)
            setEditTitulo(tempMsg.titulo)
            setEditMensagem(tempMsg.mensagem)
        }
    }, [msgRedux.selectId])

    function handleClose () {
        dispatch(resetModalMsg())   
    }

    function saveMsg () {
        if(!titulo || !mensagem) {
            setAlert ({texto:'Os campos devem ser preenchidos!', severity:'error'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                return
        }
        const newMsg: Message = {
            id: v4(),
            titulo,
            mensagem,
            userId: userId.id,
        }
        
        setAlert ({texto:'Mensagem cadastrada com SUCESSO!', severity:'success'})
                setTimeout(() => {
                    setAlert({texto:''})
                    setTitulo('')
                    setMensagem('')
                }, 2000);
                setTimeout(() => {
                    dispatch(addMsg(newMsg))
                    handleClose()
                }, 2100);
    }

    function editMensagemById () {
        if(!editTitulo || !editMensagem) {
            setAlert ({texto:'Os campos devem ser preenchidos!', severity:'error'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                return
        }
        const upDateMsg = {
            id: msgRedux.selectId,
            titulo: editTitulo,
            mensagem: editMensagem
        }
        setAlert ({texto:'Mensagem alterada com SUCESSO!', severity:'success'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                setTimeout(() => {
                    dispatch(editMsg(upDateMsg))
                    handleClose()
                }, 2100);
    }

    function handleDeleteMsg () {
        setAlert ({texto:'Mensagem EXCLUÍDA', severity:'info'})
                setTimeout(() => {
                    setAlert({texto:''})
                }, 2000);
                setTimeout(() => {
                    dispatch(deleteMsg(msgRedux.selectId))
                    handleClose()
                    dispatch(resetSelectId())
                }, 2100);
    }

    return (
        <>
        {alert.texto && (<MeuAlert texto={alert.texto} severity={alert.severity}/>)}    
        <Modal open={props.open} onClose={handleClose} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Paper elevation={24} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '40Vw', padding: '20px 0'}}>
        {props.type === 'criar' && (
            <>
            <Typography sx={{ fontSize:'clamp(1.5rem, 2vw, 2rem)'}} align='center'>Nova Mensagem</Typography>
                    
            <MeuInput variant='outlined' label='Título' type='text' placeholder='Título'
                      color='primary' size='medium' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
            <MeuInput variant='outlined' label='Mensagem' type='text' placeholder='Mensagem'
                      color='primary' size='medium' value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
                    
            <MeuButton variant='contained' color='success' size='medium' texto='SALVAR' onClick={saveMsg}/>
            <MeuButton variant='contained' color='error' size='medium' texto='CANCELAR' onClick={handleClose}/>               
            </>
        )}
        {props.type === 'editar' && (
            <>
            <Typography sx={{ fontSize:'clamp(1.5rem, 2vw, 2rem)'}} align='center'>Editando Mensagem</Typography>
                    
            <MeuInput variant='outlined' label='Título' type='text' placeholder='Título'
                      color='primary' size='medium' value={editTitulo} onClick={() => setEditTitulo('')} onChange={(e) => setEditTitulo(e.target.value)}/>
            <MeuInput variant='outlined' label='Mensagem' type='text' placeholder='Mensagem'
                      color='primary' size='medium' value={editMensagem} onClick={() => setEditMensagem('')} onChange={(e) => setEditMensagem(e.target.value)}/>
                    
            <MeuButton variant='contained' color='success' size='medium' texto='SALVAR' onClick={editMensagemById}/>
            <MeuButton variant='contained' color='error' size='medium' texto='CANCELAR' onClick={handleClose}/>               
            </>
        )}
        {props.type === 'apagar' && (
            <>
            <Typography sx={{ fontSize:'clamp(1.5rem, 2vw, 2rem)'}} align='center'>ALERTA: A Mensagem será excluída!</Typography>  
            <MeuButton variant='contained' color='success' size='medium' texto='CONFIRMAR' onClick={handleDeleteMsg}/>
            <MeuButton variant='contained' color='error' size='medium' texto='CANCELAR' onClick={handleClose}/>            
            </>
        )}
        </Paper>
        </Modal>
        </>
        
    );
};