module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx|js|jsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js", "src/**/*.jsx", "src/*.js"],
  coverageThreshold: {
    global: {
      statements: 80,
      functions: 80,
      lines: 80,
    },
  },
};
