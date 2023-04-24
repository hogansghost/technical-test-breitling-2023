import { render, screen } from '@testing-library/react';

import { font, theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Text } from '../Text';
import { TextProps } from '../Text.types';

const setup = ({ size, weight }: Partial<Pick<TextProps, 'size' | 'weight'>>) => {
  const mockCopy = 'Inner copy content';

  const renderUtils = render(
    <Text size={size} weight={weight}>
      {mockCopy}
    </Text>,
    {
      wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    }
  );

  return {
    ...renderUtils,
    mockCopy,
  };
};

describe('Text', () => {
  it('renders small size text', () => {
    const { mockCopy } = setup({ size: 'small' });

    expect(screen.getByText(mockCopy)).toHaveStyleRule('font-size', font.size.body.small);
  });

  it('renders large size text', () => {
    const { mockCopy } = setup({ size: 'large' });

    expect(screen.getByText(mockCopy)).toHaveStyleRule('font-size', font.size.body.large);
  });

  it('renders the light weight', () => {
    const { mockCopy } = setup({ weight: 'light' });

    expect(screen.getByText(mockCopy)).toHaveStyleRule('font-weight', String(font.weight.light));
  });

  it('renders the regular weight', () => {
    const { mockCopy } = setup({ weight: 'regular' });

    expect(screen.getByText(mockCopy)).toHaveStyleRule('font-weight', String(font.weight.regular));
  });

  it('renders the semiBold weight', () => {
    const { mockCopy } = setup({ weight: 'semiBold' });

    expect(screen.getByText(mockCopy)).toHaveStyleRule('font-weight', String(font.weight.semiBold));
  });
});
