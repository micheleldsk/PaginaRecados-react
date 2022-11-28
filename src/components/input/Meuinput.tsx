import React from 'react';
import TextField from '@mui/material/TextField';

interface MeuInputProps {
    label: string,
    type: string,
    placeholder: string,
    value: string,
    color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    size: 'medium' | 'small',
    variant: 'filled' | 'outlined' | 'standard',
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const MeuInput = ({ label, type, value, placeholder, color, size, variant, onChange, onClick }: MeuInputProps) => {
    return (
        <TextField 
            variant={variant} 
            label={label}
            type={type} 
            placeholder={placeholder}
            color={color} 
            size={size}
            value={value} 
            onChange={onChange}
            onClick={onClick}  
            sx={{ fontSize:'clamp(0.5rem, 2vw, 0.75rem)', m: 2 }}
        />
    );
};
export default MeuInput;