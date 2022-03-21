import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { ImageStyled } from './Invitation.style';
import { palette } from '../../../../assets/images';

interface InvitationProps {
  invitation?: string
}

export const Invitation: FC<InvitationProps> = ({ invitation }) => (
  <>
    <Typography
      variant="h1"
      gutterBottom
      textAlign="center"
      fontFamily="HelloJanuary, sans-serif"
      color="common.invitationGold"
    >
      Д & Н
    </Typography>
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
          >
            <Typography fontFamily="TenorSansRegular, sans-serif" variant="subtitle1">20.05.2022 МЫ СТАНЕМ</Typography>
            <Typography fontFamily="TenorSansRegular, sans-serif" variant="subtitle1" gutterBottom>МУЖЕМ И ЖЕНОЙ</Typography>
          </Box>
          <Divider color="common.invitationGold" />
          <Box
            mt={1}
            mb={1}
          >
            <Typography
              fontFamily="TenorSansRegular, sans-serif"
              variant="caption"
              gutterBottom
              paragraph
            >
              МЕСТО: Академия Кавказкой Кухни
            </Typography>
            <Typography
              fontFamily="TenorSansRegular, sans-serif"
              variant="caption"
              gutterBottom
              paragraph
            >
              АДРЕС: слобода Талица, ул.Янтарная Слобода, 14в, зал Эльбрус
            </Typography>
            <Typography
              fontFamily="TenorSansRegular, sans-serif"
              variant="caption"
              paragraph
            >
              СБОР ГОСТЕЙ: 16:00
            </Typography>
          </Box>
          <Divider color="common.invitationGold" />
        </>
      )}
    <Box
      height="80px"
      mt={1}
    >
      <Typography
        fontFamily="TenorSansRegular, sans-serif"
        variant="caption"
      >
        РЕКОМЕНДОВАННЫЕ ОТТЕНКИ:
      </Typography>
      <ImageStyled
        src={palette}
        alt="palette"
      />
    </Box>
  </>
);

Invitation.defaultProps = {
  invitation: '',
};

export default Invitation;
