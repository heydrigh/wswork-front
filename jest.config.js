module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
    '\\.(svg)$': '<rootDir>/node_modules/jest-svg-transformer',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
  },
};
