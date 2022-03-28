import React, { FC, useCallback } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { ButtonStyled } from '../../Main.style';

interface AcceptProps {
  onAccept: () => void
  onCloseSnackbar: () => void
}

export const Accept: FC<AcceptProps> = ({ onAccept, onCloseSnackbar }) => {
  const [open, setOpen] = React.useState(false);
  const handleAccept = useCallback(() => {
    setOpen(true);
    onAccept();
  }, [onAccept]);

  const handleClose = useCallback(() => {
    setOpen(false);
    onCloseSnackbar();
  }, [onCloseSnackbar]);

  return (
    <>
      <ButtonStyled
        onClick={handleAccept}
        variant="outlined"
      >
        Подтвердить приглашение
      </ButtonStyled>
      <Snackbar
        open={open}
        action={(
          <ButtonStyled size="small" onClick={handleClose}>
            Ок
          </ButtonStyled>
        )}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        message="Мы любим цветы, но так как в Кирове ненадолго,
        предлагаем заменить букет на вино, книгу или презент на Ваше усмотрение"
      />
    </>
  );
};

export default Accept;
