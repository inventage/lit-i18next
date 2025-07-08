import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { parseTsconfig } from 'get-tsconfig';
import { fileURLToPath } from 'node:url';
import { writeFileSync } from 'node:fs';

const TS_CONFIG_PATH = fileURLToPath(new URL('./tsconfig.test.json', import.meta.url));
const HIDDEN_WARNINGS = [/Lit is in dev mode/u];

writeFileSync('tsconfig.test-parsed.json', JSON.stringify(parseTsconfig(TS_CONFIG_PATH), null, 2), { encoding: 'utf8' });

const filterBrowserLogs = log => {
  const [message] = log.args;

  // Filter out i18next logs
  if (message.startsWith('i18next:')) {
    return false;
  }

  const isHidden = HIDDEN_WARNINGS.some(warning => {
    if (warning instanceof RegExp && warning.test(message)) {
      return true;
    }

    return warning === message;
  });

  return !isHidden;
};

// noinspection JSUnusedGlobalSymbols
export default {
  nodeResolve: true,
  files: ['test/**/*.spec.ts'],
  coverage: true,
  coverageConfig: {
    reporters: ['lcov'],
  },
  browsers: [playwrightLauncher({ product: 'chromium' })],
  plugins: [
    esbuildPlugin({
      ts: true,
      target: 'auto',
      tsconfig: './tsconfig.test-parsed.json',
    }),
  ],
  testRunnerHtml: testFramework => `
    <!DOCTYPE html>
    <html lang="en">
      <body>
        <script type="module">
          // See https://github.com/modernweb-dev/web/issues/2802#issuecomment-2352116570
          import structuredClone from '@ungap/structured-clone';
          window.structuredClone = (value) => structuredClone(value, { lossy: true });
        </script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>
  `,
  filterBrowserLogs,
  testFramework: {
    config: {
      timeout: 5000,
    },
  },
};
