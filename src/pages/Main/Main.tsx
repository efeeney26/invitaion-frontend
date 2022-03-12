import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Collapse from '@mui/material/Collapse';

import { Invitation, Video } from './components';
import apiClient from '../../services';
import { IGuest } from '../../types';

export const Main: FC = () => {
  const [collapsed, setCollapsed] = useState(true);

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

  const handleCollapse = useCallback(() => {
    setCollapsed(false);
  }, []);

  const handleOpen = useCallback(() => {
    if (!collapsed) {
      setCollapsed(true);
    }
  }, [collapsed]);

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
            <Box
              height="100vh"
              width="100%"
              bgcolor="common.invitationGrey"
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              padding={2}
              onClick={handleCollapse}
            >
              <Video
                accept={guest.accept}
                onAccept={handleAccept}
              />
            </Box>
            <Collapse
              orientation="vertical"
              in={collapsed}
              collapsedSize={60}
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
              }}
            >
              <Box
                height="90vh"
                bgcolor="common.invitationPink"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                padding={2}
                onClick={handleOpen}
              >
                <Invitation
                  name={guest.name}
                  invitation={guest.invitation}
                />
              </Box>
            </Collapse>
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
    </Container>
  );
};

export default Main;
