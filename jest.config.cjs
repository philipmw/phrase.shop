module.exports = {
  collectCoverage: true,
  coverageReporters: ["lcovonly", "text"],

  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  preset: "ts-jest",
  roots: [
    "<rootDir>/src"
  ],
  testEnvironment: "jsdom",
  transform: { // https://stackoverflow.com/a/64223627/1214939
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
      "/node_modules/(?!preact)",
  ],
};
