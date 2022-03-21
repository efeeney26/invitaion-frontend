import { styled } from '@mui/material/styles';
import MUIDivider from '@mui/material/Divider';

export const ImageStyled = styled('img')(() => ({
  width: '100%',
  height: '80px',
  objectFit: 'contain',
  marginTop: '-10px',
}));

export const Divider = styled(MUIDivider)(({ theme }) => ({
  background: theme.palette.common.invitationGold,
}));
