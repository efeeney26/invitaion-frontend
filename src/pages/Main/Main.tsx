import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { Invitation, Accept } from './components';
import apiClient from '../../services';
import { IGuest } from '../../types';
import { MainContainerStyled, InvitationBoxStyled } from './Main.style';

export const Main: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [guest, setGuest] = useState<IGuest | null>(null);
  const [error, setError] = useState(false);

  const guestId = useMemo(() => (new URLSearchParams(window.location.search))?.get('id'), []);

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
        await apiClient.updateGuest(acceptedGuest);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (guestId) {
      fetchGuest(guestId);
    }
  }, [fetchGuest, guestId]);

  const handleAccept = useCallback(() => {
    acceptInvitation({
      guest: {
        ...guest,
        accept: true,
      },
    });
  }, [acceptInvitation, guest]);

  const handleCloseSnackbar = useCallback(() => {
    if (guestId) {
      fetchGuest(guestId);
    }
  }, [fetchGuest, guestId]);

  return (
    <>
      {guest?.name
        && (
          <MainContainerStyled
            maxWidth={false}
            disableGutters
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
                variant="body2"
                color="common.invitationGold"
              >
                <br />
                {'Приглашаем разделить с нами'.toUpperCase()}
                <br />
                <br />
                {'рождение нашей семьи!'.toUpperCase()}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              width="100%"
              flexGrow={1}
            >
              <InvitationBoxStyled>
                <Invitation
                  invitation={guest?.invitation}
                />
              </InvitationBoxStyled>
              {!guest.accept
                ? (
                  <Accept
                    onAccept={handleAccept}
                    onCloseSnackbar={handleCloseSnackbar}
                  />
                ) : (
                  <Typography
                    variant="caption"
                    color="common.invitationGold"
                    sx={{
                      fontSize: '0.7rem',
                    }}
                  >
                    ВЫ ПОДТВЕРДИЛИ ПРИГЛАШЕНИЕ
                  </Typography>
                )}
            </Box>
          </MainContainerStyled>
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
