// TODO: Multiple values, etc.
const spacing = (value: number, multiplier = 8): string => `${Math.round(value * multiplier)}px`;

export const dimensions = {
  content: {
    small: '1000px',
    medium: '1400px',
    large: '1920px',
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

const colors = {
  interface: {
    controls: {
      background: '#fafafa',
    },
  },
};

export const theme = {
  colors,
  dimensions,
  font,
  spacing,
};
