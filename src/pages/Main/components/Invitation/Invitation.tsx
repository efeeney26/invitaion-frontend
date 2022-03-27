import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player/lazy';

import {
  ImageStyled, Divider, ImageBoxStyled, VideoBoxStyled,
} from './Invitation.style';
import { palette } from '../../../../assets/images';
import { invitation as videoInvitation } from '../../../../assets/videos';

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
          <VideoBoxStyled>
            <ReactPlayer
              width="100%"
              height="100%"
              url={videoInvitation}
              controls
              playsinline
            />
          </VideoBoxStyled>
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
            >
              СБОР ГОСТЕЙ: 16:00
            </Typography>
          </Box>
          <Divider />
        </>
      )}
    <Box
      mt={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        sx={{
          fontSize: '0.6rem',
        }}
      >
        РЕКОМЕНДОВАННЫЕ ОТТЕНКИ:
      </Typography>
      <ImageBoxStyled>
        <ImageStyled
          src={palette}
          alt="palette"
        />
      </ImageBoxStyled>
    </Box>
  </>
);

Invitation.defaultProps = {
  invitation: '',
};

export default Invitation;
