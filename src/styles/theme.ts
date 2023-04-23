// TODO: Multiple values, etc.
const spacing = (value: number, multiplier: number = 8) => `${value * multiplier}px`;

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
      small: '14px',
      medium: '16px',
      large: '18px',
    },
  },
};

export const theme = {
  spacing,
  font,
};
