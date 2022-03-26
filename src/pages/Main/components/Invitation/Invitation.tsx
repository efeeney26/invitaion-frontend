import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player/lazy';

import { ImageStyled, Divider, BoxImageStyled } from './Invitation.style';
import { palette } from '../../../../assets/images';

interface InvitationProps {
  invitation?: string
}

export const Invitation: FC<InvitationProps> = ({ invitation }) => (
  <>
    {invitation
      ? (
        <Typography
          dangerouslySetInnerHTML={{ __html: invitation }}
        />
      )
      : (
        <>
          <Box
            mt={1}
            mb={1}
            width="100%"
            height="16rem"
          >
            <ReactPlayer
              width="100%"
              height="100%"
              url=""
            />
          </Box>
          <Divider />
          <Box
            mt={1}
            mb={1}
          >
            <Typography
              variant="caption"
              gutterBottom
              paragraph
            >
              МЕСТО: Академия Кавказкой Кухни
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              paragraph
            >
              АДРЕС: слобода Талица, ул.Янтарная Слобода, 14в, зал Эльбрус
            </Typography>
            <Typography
              variant="caption"
              paragraph
            >
              СБОР ГОСТЕЙ: 16:00
            </Typography>
          </Box>
          <Divider />
        </>
      )}
    <Box
      mt={1}
    >
      <Typography
        variant="caption"
      >
        РЕКОМЕНДОВАННЫЕ ОТТЕНКИ:
      </Typography>
      <BoxImageStyled>
        <ImageStyled
          src={palette}
          alt="palette"
        />
      </BoxImageStyled>
    </Box>
  </>
);

Invitation.defaultProps = {
  invitation: '',
};

export default Invitation;
