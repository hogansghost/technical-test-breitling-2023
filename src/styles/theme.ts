// TODO: Multiple values, etc.
const spacing = (value: number, multiplier = 8): string => `${Math.round(value * multiplier)}px`;

export const dimensions = {
  content: {
    small: '1000px',
    medium: '1200px',
    large: '1400px',
  },
};

export const font = {
  weight: {
    light: 300,
    regular: 400,
    semiBold: 600,
  },
  size: {
    heading: {
      small: '18px',
      medium: '24px',
      large: '28px',
      extraLarge: '40px',
    },
    body: {
      extraSmall: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
    },
  },
};

export const theme = {
  spacing,
  font,
  dimensions,
};
