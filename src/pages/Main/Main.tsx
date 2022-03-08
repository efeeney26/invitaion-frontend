import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import apiClient from '../../services';
import { IGuest } from '../../types';

export const Main: FC = () => {
  const [guest, setGuest] = useState<IGuest | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const urlParams = useMemo(() => new URLSearchParams(window.location.search), []);

  const fetchGuest = useCallback(async (id: string) => {
    try {
      const fetchedGuest = (await apiClient.getGuest(id))?.data;
      if (fetchedGuest) {
        setGuest(fetchedGuest);
      }
    } catch (e) {
      console.error('Error');
    }
  }, []);

  const acceptInvitation = useCallback(async (acceptedGuest) => {
    try {
      if (acceptedGuest) {
        const message = (await apiClient.updateGuest(acceptedGuest))?.data?.message;
        if (message) {
          setSuccessMessage(message);
        }
      }
    } catch (e) {
      console.error('Error');
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

  return (
    <div>
      <h1>{guest?.name}</h1>
      <h4>{guest?.invitation}</h4>
      {successMessage && <p>{successMessage}</p>}
      {guest?.accept
        ? (
          <p>Вы подвердили приглашение</p>
        )
        : (
          <button
            type="button"
            onClick={handleAccept}
          >
            Подвердить приглашение
          </button>
        )}
    </div>
  );
};

export default Main;
