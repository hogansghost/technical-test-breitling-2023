import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://demo.saleor.io/graphql/',
  documents: './src/**/*.graphql',
  generates: {
    'src/types.ts': {
      plugins: ['typescript'],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: { extension: '.generated.tsx', baseTypesPath: 'types.ts' },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: { withHooks: true },
    },
  },
};

export default config;
