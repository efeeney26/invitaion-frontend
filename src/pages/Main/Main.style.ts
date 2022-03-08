import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';

export const Accordion = styled(MuiAccordion)<{ type?: string }>(({ theme }) => (
  ({ type }) => ({
    background: type === 'invitation' ? theme.palette.common.invitationPink : theme.palette.common.invitationGrey,
  })
));

export const AccordionDetails = styled(MuiAccordionDetails)(() => (
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    height: '80vh',
  }
));

export const Button = styled(MuiButton)(({ theme }) => ({
  borderColor: theme.palette.common.invitationRed,
  color: theme.palette.common.invitationRed,
  borderRadius: '10px',
}));

export const ImageStyled = styled('img')(() => ({
  width: '100%',
  height: '150px',
  objectFit: 'contain',
}));
