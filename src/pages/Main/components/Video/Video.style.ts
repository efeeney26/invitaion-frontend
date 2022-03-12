import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

export const Button = styled(MuiButton)(({ theme }) => ({
  borderColor: theme.palette.common.invitationRed,
  color: theme.palette.common.invitationRed,
  borderRadius: '10px',
}));
