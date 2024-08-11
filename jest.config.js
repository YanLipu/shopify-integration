module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    testMatch: ['**/tests/**/*.spec.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
  };
  