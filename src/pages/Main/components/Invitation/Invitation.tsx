import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ImageStyled } from './Invitation.style';
import { palette } from '../../../../assets/images';

interface InvitationProps {
  name: string,
  invitation?: string
}

export const Invitation: FC<InvitationProps> = ({ name, invitation }) => (
  <>
    <Typography
      variant="h1"
      gutterBottom
      sx={{
        fontFamily: 'HelloJanuary, sans-serif',
      }}
    >
      Д & Н
    </Typography>
    <Typography variant="h3">{name}</Typography>
    {invitation
      ? (
        <Typography
          dangerouslySetInnerHTML={{ __html: invitation }}
        />
      )
      : (
        <>
          <Typography>20.05.2022 мы станем мужем и женой!</Typography>
          <Typography>Разделите этот важный для нас день с нами</Typography>
          <Typography>Сбор гостей 16:00</Typography>
          <Typography>Место Академия Кавказкой Кухни</Typography>
          <Typography>Адрес: слобода Талица, ул.Янтарная Слобода, 14в, зал Эльбрус</Typography>
        </>
      )}
    <Box
      height="100px"
    >
      <Typography variant="body2">Рекомендованные оттенки</Typography>
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
