import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import CircularProgress from '@mui/material/CircularProgress';

import { palette } from '../../assets';
import {
  AccordionDetails, ImageStyled, Accordion, Button,
} from './Main.style';
import apiClient from '../../services';
import { IGuest } from '../../types';

export const Main: FC = () => {
  const [expanded, setExpanded] = useState('invitation');

  const [isLoading, setLoading] = useState(false);
  const [guest, setGuest] = useState<IGuest | null>(null);
  const [error, setError] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');

  const urlParams = useMemo(() => new URLSearchParams(window.location.search), []);

  const fetchGuest = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const fetchedGuest = (await apiClient.getGuest(id))?.data;
      if (fetchedGuest) {
        setGuest(fetchedGuest);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const acceptInvitation = useCallback(async (acceptedGuest) => {
    try {
      setLoading(true);
      if (acceptedGuest) {
        const message = (await apiClient.updateGuest(acceptedGuest))?.data?.message;
        if (message) {
          setSuccessMessage(message);
        }
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const guestId = urlParams.get('id');
    if (guestId) {
      fetchGuest(guestId);
    }
  }, [fetchGuest, urlParams]);

  const handleAccept = useCallback(() => {
    acceptInvitation({
      guest: {
        ...guest,
        accept: true,
      },
    });
  }, [acceptInvitation, guest]);

  const handleChange = (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : '');
  };

  return (
    <Container
      disableGutters
    >
      {guest?.name
        && (
          <Box
            display="flex"
            height="100vh"
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Accordion
              expanded={expanded === 'video'}
              onChange={handleChange('video')}
              disableGutters
            >
              <AccordionSummary
                aria-controls="videobh-content"
                id="videobh-header"
              />
              <AccordionDetails>
                <Typography>
                  Здесь будет видео
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'invitation'}
              onChange={handleChange('invitation')}
              disableGutters
              type="invitation"
            >
              <AccordionSummary
                aria-controls="invitationbh-content"
                id="invitationbh-header"
              />
              <AccordionDetails>
                <Typography variant="h3">{guest?.name}</Typography>
                <Typography dangerouslySetInnerHTML={{ __html: guest?.invitation as string }} />
                <Box
                  height="150px"
                >
                  <ImageStyled src={palette} alt="palette" />
                </Box>
                {successMessage && <p>{successMessage}</p>}
                {guest?.accept
                  ? (
                    <Typography>Вы подвердили приглашение</Typography>
                  )
                  : (
                    <>
                      <Typography variant="caption">Просим подтвердить приглашение, нажатием на кнопку:</Typography>
                      <Button
                        onClick={handleAccept}
                        variant="outlined"
                      >
                        Подвердить приглашение
                      </Button>
                      <Typography variant="caption">В обратном случае, сообщите, пожалуйста, нам до 10.05.2022</Typography>
                    </>
                  )}
              </AccordionDetails>
            </Accordion>
          </Box>
        )}
      {(error || isLoading) && (
        <Box
          display="flex"
          height="100vh"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          {error && <Typography variant="h4">Ой, что-то пошло не так</Typography>}
          {isLoading && <CircularProgress />}
        </Box>
      )}
    </Container>
  );
};

export default Main;
