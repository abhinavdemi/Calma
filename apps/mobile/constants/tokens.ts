// Design tokens matching the web app
// These mirror packages/shared/constants/tokens.ts without the workspace dep

export const colors = {
  sand: {
    50: '#FDFAF6',
    100: '#F7F2EB',
    200: '#EDE5D8',
    300: '#DDD0BE',
    400: '#C4AE96',
    500: '#A8906F',
    600: '#8B7355',
    700: '#6E5940',
    800: '#4A3A29',
    900: '#2C2118',
  },
  sage: {
    100: '#E8F0E6',
    200: '#C8DBC5',
    300: '#A8C5A0',
    400: '#88AA80',
    500: '#6A9062',
  },
  clay: {
    100: '#F5E6DC',
    200: '#E8C9B5',
    300: '#D4A88A',
  },
} as const;

export const typography = {
  fontSerif: 'Lora_400Regular',
  fontSerifBold: 'Lora_700Bold',
  fontSans: 'DMSans_400Regular',
  fontSansMedium: 'DMSans_500Medium',
};
