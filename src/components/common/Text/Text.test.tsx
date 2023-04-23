// import { render, screen } from '@utils/testing';
// import { colors, font } from '@utils/uiTheme';

// import { Text } from './Text';

// describe('Text', () => {
//   it('renders the component', () => {
//     render(<Text>A Text</Text>);

//     expect(screen.getByText('A Text')).toBeInTheDocument();
//   });

//   describe('color prop', () => {
//     it('renders the light text color when color="light"', () => {
//       render(<Text color="light">A Text</Text>);

//       expect(screen.getByText('A Text')).toHaveStyleRule('color', colors.new.text['300']);
//     });
//   });

//   describe('size prop', () => {
//     it('renders the size text.size.body.sm when size="small"', () => {
//       render(<Text size="small">A Text</Text>);

//       expect(screen.getByText('A Text')).toHaveStyleRule('font-size', font.size.body.small);
//     });

//     it('renders the size text.size.body.lg when size="large"', () => {
//       render(<Text size="large">A Text</Text>);

//       expect(screen.getByText('A Text')).toHaveStyleRule('font-size', font.size.body.large);
//     });
//   });

//   describe('weight prop', () => {
//     it('renders the weight text.weight.light when weight="light"', () => {
//       render(<Text weight="light">A Text</Text>);

//       expect(screen.getByText('A Text')).toHaveStyleRule('font-weight', String(font.weight.light));
//     });

//     it('renders the weight text.weight.bold when weight="medium"', () => {
//       render(<Text weight="medium">A Text</Text>);

//       expect(screen.getByText('A Text')).toHaveStyleRule('font-weight', String(font.weight.medium));
//     });

//     it('renders the weight text.weight.bolder when weight="semiBold"', () => {
//       render(<Text weight="semiBold">A Text</Text>);

//       expect(screen.getByText('A Text')).toHaveStyleRule('font-weight', String(font.weight.semiBold));
//     });

//     it('renders the weight text.weight.boldest when weight="bold"', () => {
//       render(<Text weight="bold">A Text</Text>);

//       expect(screen.getByText('A Text')).toHaveStyleRule('font-weight', String(font.weight.bold));
//     });
//   });
// });
