import type { Config } from "jest";

const config: Config = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
