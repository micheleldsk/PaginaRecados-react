import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export interface MeuAlertProps {
  texto: string,
  severity?: 'error' | 'info' | 'success' | 'warning',
}

export function MeuAlert({ texto, severity }: MeuAlertProps) {
  return (
    <Stack sx={{
      position: 'fixed', left: '50%', top: '0',
      transform: 'translateX(-50%)', zIndex: '9999',
      width: '30%'
    }} spacing={2}>
      <Alert sx={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: 'clamp(0.75rem, 2vw, 1.25rem)'
      }}
        variant="filled" severity={severity}>
        {texto}
      </Alert>
    </Stack>
  );
};