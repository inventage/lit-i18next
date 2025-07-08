import { default as config } from './web-test-runner.config.js';

// Run in watch mode
config.watch = true;

// Increase timeout when needed (e.g. when debugging visually in a browser)
// @see https://modern-web.dev/docs/test-runner/test-frameworks/mocha/#configuring-mocha-options
config.testFramework.config.timeout = 200000;

// noinspection JSUnusedGlobalSymbols
export default config;
