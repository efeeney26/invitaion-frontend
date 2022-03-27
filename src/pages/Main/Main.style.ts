import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import MUIContainer from '@mui/material/Container';
import MUIBox from '@mui/material/Box';

export const MainContainer = styled(MUIContainer)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.common.invitationGreyLight,
  padding: '40px 40px 10px 40px',
  [theme.breakpoints.up('md')]: {
    padding: '40px 160px 10px 160px',
  },
}));

export const InvitationBox = styled(MUIBox)(({ theme }) => ({
  width: '100%',
  background: theme.palette.common.invitationPinkLight,
  textAlign: 'center',
  padding: '30px 30px 5px 30px',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: '30px 120px 5px 120px',
  },
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  borderColor: theme.palette.common.invitationGold,
  color: theme.palette.common.invitationGold,
  borderRadius: '10px',
  '&:hover': {
    borderColor: theme.palette.common.invitationGold,
    color: theme.palette.common.invitationGold,
  },
}));
