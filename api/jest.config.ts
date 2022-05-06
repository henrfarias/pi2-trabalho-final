import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  rootDir: 'test',
  preset: 'ts-jest',
}

export default config
