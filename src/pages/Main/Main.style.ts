import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import MUIContainer from '@mui/material/Container';
import MUIBox from '@mui/material/Box';

export const MainContainerStyled = styled(MUIContainer)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.common.invitationGreyLight,
  padding: '40px 40px 20px 40px',
  [theme.breakpoints.up('md')]: {
    padding: '40px 160px 10px 160px',
  },
}));

export const InvitationBoxStyled = styled(MUIBox)(({ theme }) => ({
  width: '100%',
  background: theme.palette.common.invitationPinkLight,
  textAlign: 'center',
  padding: '30px 30px 0 30px',
  margin: `${theme.spacing(3)} 0`,
  [theme.breakpoints.up('md')]: {
    padding: '30px 120px 0 120px',
  },
}));

export const ButtonStyled = styled(MuiButton)(({ theme }) => ({
  borderColor: theme.palette.common.invitationGold,
  color: theme.palette.common.invitationGold,
  borderRadius: '10px',
  '&:hover': {
    borderColor: theme.palette.common.invitationGold,
    color: theme.palette.common.invitationGold,
  },
}));
