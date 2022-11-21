import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export const MeuHeader = () => {
  const navigate = useNavigate();
  function Logout(){
    localStorage.removeItem('usuarioLogado')
    setTimeout(() => {
      navigate('/')
    }, 500)
  }
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <Fab color="primary" aria-label="add" size="small">
            <AddIcon />
            </Fab>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontSize:'clamp(1rem, 2vw, 1.5rem)', flexGrow: 1 }}>
            Adicione seu recado...
          </Typography>
          <Button color="inherit" onClick={Logout} sx={{ fontSize:'clamp(0.75rem, 2vw, 1.10rem)'}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
};