import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

export const Button = styled(MuiButton)(({ theme }) => ({
  borderColor: theme.palette.common.invitationGold,
  color: theme.palette.common.invitationGold,
  borderRadius: '10px',
  '&:hover': {
    borderColor: theme.palette.common.invitationGold,
    color: theme.palette.common.invitationGold,
  },
}));
