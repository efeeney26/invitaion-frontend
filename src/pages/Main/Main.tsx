import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { Invitation } from './components';
import apiClient from '../../services';
import { IGuest } from '../../types';
import { Button } from './Main.style';

export const Main: FC = () => {
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
  }, [fetchGuest, urlParams, successMessage]);

  const handleAccept = useCallback(() => {
    acceptInvitation({
      guest: {
        ...guest,
        accept: true,
      },
    });
  }, [acceptInvitation, guest]);

  return (
    <>
      {guest?.name
        && (
          <Box
            display="flex"
            minHeight="100vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgcolor="common.invitationGreyLight"
            padding="40px 40px 10px 40px"
          >
            <Box
              textAlign="center"
              width="100%"
            >
              <Typography
                variant="body1"
                color="common.invitationGold"
              >
                {(guest.name).toUpperCase()}
              </Typography>
              <Typography
                variant="body1"
                color="common.invitationGold"
              >
                РАЗДЕЛИТЕ С НАМИ
                {' '}
                <br />
                РОЖДЕНИЕ НАШЕЙ СЕМЬИ
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-end"
              width="100%"
              flexGrow={1}
            >
              <Box
                width="100%"
                bgcolor="common.invitationPinkLight"
                textAlign="center"
                padding="30px 30px 5px 30px"
                mb={3}
              >
                <Invitation
                  invitation={guest?.invitation}
                />
              </Box>
              {!guest.accept
                ? (
                  <>
                    <Button
                      variant="outlined"
                      sx={{
                        marginBottom: '10px',
                      }}
                    >
                      Подвердить присутствие
                    </Button>
                    <Typography
                      variant="caption"
                      color="common.invitationGold"
                      textAlign="center"
                    >
                      В ОБРАТНОМ СЛУЧАЕ, СООБЩИТЕ НАМ ДО
                      <br />
                      10.05.2022 ЛЮБЫМ УДОБНЫМ СПОСОБОМ
                    </Typography>
                  </>
                ) : (
                  <Typography
                    variant="caption"
                    color="common.invitationGold"
                  >
                    ВЫ ПОДТВЕРДИЛИ ПРИГЛАШЕНИЕ
                  </Typography>
                )}
            </Box>
          </Box>
        )}
      {(error || isLoading) && (
        <Box
          display="flex"
          height="100vh"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          {error && <Typography variant="h4">Ой, что-то пошло не так</Typography>}
          {isLoading && <CircularProgress />}
        </Box>
      )}
    </>
  );
};

export default Main;
