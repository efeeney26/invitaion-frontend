import { Theme, TypographyVariant } from '@mui/material';

export const responsiveFontsSizes = (theme: Theme) => {
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const themeKey in theme.typography) {
    const variant = theme.typography?.[themeKey as TypographyVariant];
    if (typeof variant === 'object') {
      Object.assign(variant, {
        [theme.breakpoints.up('sm')]: {
          fontSize: `${parseFloat(variant.fontSize as string) + 0.2}rem`,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: `${parseFloat(variant.fontSize as string) + 0.5}rem`,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: `${parseFloat(variant.fontSize as string) + 0.7}rem`,
        },
      });
    }
  }
};
