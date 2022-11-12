// jest.config.js
import nextJest from 'next/jest'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFiles: [ '<rootDir>/.jest/setEnvVars.ts' ],
  setupFilesAfterEnv: [ '<rootDir>/jest.setup.ts' ],
  modulePaths: [ '<rootDir>/libs' ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)
