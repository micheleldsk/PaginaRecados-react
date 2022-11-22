import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MeuButton } from '../button/MeuButton';
import { useDispatch, useSelector } from 'react-redux';
import { msgSelectAll, setModalMsg, setSelectId } from '../../store/msgSlice';
import Message from '../global-types/TMessage';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function MeuRecado () {

  const dispatch = useDispatch()

  const {msgList} = useSelector (msgSelectAll)
  const [list, setList] = React.useState <Array<Message>> ([])

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')!)

  React.useEffect (()=> {
    if (msgList.length) {
      const findMsg = msgList.filter((mensagem) => mensagem.userId === usuarioLogado.id)
      findMsg.length? setList(findMsg): setList([])      
    }
  }, [msgList])

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

   const handleShowModal = (id: string, type: string) => {
    if (type === 'editar') {
      dispatch(setSelectId(id))
      return dispatch(setModalMsg({open: true, type}))      
    }
    dispatch(setSelectId(id))
    return dispatch(setModalMsg({open: true, type})) 
   }  

  return (
    <div style={{padding: '0 25vw'}}>
      {list.map((item) => 
      <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{item.titulo}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.mensagem}
          </Typography>
          <MeuButton variant='contained' color='success' size='medium' texto='EDITAR'onClick={() => handleShowModal(item.id, 'editar')}/>
          <MeuButton variant='contained' color='error' size='medium' texto='APAGAR'onClick={() => handleShowModal(item.id, 'apagar')}/>
        </AccordionDetails>
      </Accordion>
      )}
    </div>
  );
};