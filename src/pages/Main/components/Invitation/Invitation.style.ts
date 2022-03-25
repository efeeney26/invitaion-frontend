import { styled } from '@mui/material/styles';
import MUIDivider from '@mui/material/Divider';
import MUIBox from '@mui/material/Box';

export const BoxImageStyled = styled(MUIBox)(({ theme }) => (
  {
    height: '5rem',
    [theme.breakpoints.up('sm')]: {
      height: '15rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '25rem',
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
