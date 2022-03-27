import { styled } from '@mui/material/styles';
import MUIDivider from '@mui/material/Divider';
import MUIBox from '@mui/material/Box';

export const ImageBoxStyled = styled(MUIBox)(({ theme }) => (
  {
    height: '4rem',
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      height: '8rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '12rem',
    },
  }
));

export const VideoBoxStyled = styled(MUIBox)(({ theme }) => ({
  margin: `${theme.spacing(1)} 0`,
  width: '100%',
  height: '18rem',
  [theme.breakpoints.up('sm')]: {
    height: '20rem',
  },
  [theme.breakpoints.up('md')]: {
    height: '28rem',
  },
}));

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
