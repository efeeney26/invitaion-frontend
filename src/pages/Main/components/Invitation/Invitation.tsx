import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ImageStyled } from './Invitation.style';
import { palette } from '../../../../assets';

interface InvitationProps {
  name: string,
  invitation: string
}

export const Invitation: FC<InvitationProps> = ({ name, invitation }) => (
  <>
    <Typography variant="h3">{name}</Typography>
    <Typography
      dangerouslySetInnerHTML={{ __html: invitation }}
      sx={{
        marginTop: '2em',
      }}
    />
    <Box
      height="100px"
    >
      <ImageStyled
        src={palette}
        alt="palette"
      />
    </Box>
  </>
);

export default Invitation;
