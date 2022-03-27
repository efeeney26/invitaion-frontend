import { styled } from '@mui/material/styles';
import MUIDivider from '@mui/material/Divider';
import MUIBox from '@mui/material/Box';

export const BoxImageStyled = styled(MUIBox)(({ theme }) => (
  {
    height: '6rem',
    [theme.breakpoints.up('sm')]: {
      height: '16rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '20rem',
    },
  }
));

export const ImageStyled = styled('img')(() => (
  {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
));

export const Divider = styled(MUIDivider)(({ theme }) => ({
  background: theme.palette.common.invitationGold,
}));
