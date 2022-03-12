import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from './Video.style';

interface VideoProps {
  accept: boolean
  onAccept: () => void
}

export const Video: FC<VideoProps> = ({ accept, onAccept }) => (
  <>
    <Typography>
      Здесь будет видео
    </Typography>
    <Box
      mt={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {accept
        ? (
          <Typography>Вы подвердили приглашение</Typography>
        )
        : (
          <>
            <Typography variant="caption">Просим подтвердить приглашение, нажатием на кнопку:</Typography>
            <Button
              onClick={onAccept}
              variant="outlined"
            >
              Подвердить приглашение
            </Button>
            <Typography variant="caption">В обратном случае, сообщите, пожалуйста, нам до 10.05.2022</Typography>
          </>
        )}
    </Box>
  </>
);

export default Video;
