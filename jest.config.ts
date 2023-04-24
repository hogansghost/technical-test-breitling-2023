import type { Config } from 'jest';

import hq from 'alias-hq';

const config: Config = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/*.generated.tsx'],
  coverageReporters: ['json', 'lcov', 'text'],
  reporters: ['default'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/src/testing/config.ts'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  modulePaths: [],
  moduleNameMapper: {
    // Maps Typescript paths to jest module names. (Enables import aliases for tests)
    ...hq.get('jest'),
  },
  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
  testEnvironment: 'jsdom',
  clearMocks: true,
};

export default config;
