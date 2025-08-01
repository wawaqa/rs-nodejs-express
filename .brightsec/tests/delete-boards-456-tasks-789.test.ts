import { test, before, after } from 'node:test';
import { SecRunner } from '@sectester/runner';
import { AttackParamLocation, HttpMethod } from '@sectester/scan';

const timeout = 40 * 60 * 1000;
const baseUrl = process.env.BRIGHT_TARGET_URL!;

let runner!: SecRunner;

before(async () => {
  runner = new SecRunner({
    hostname: process.env.BRIGHT_HOSTNAME!,
    projectId: process.env.BRIGHT_PROJECT_ID!
  });

  await runner.init();
});

after(() => runner.clear());

test('DELETE /boards/456/tasks/789', { signal: AbortSignal.timeout(timeout) }, async () => {
  await runner
    .createScan({
      tests: ['csrf', 'bopla', 'id_enumeration', 'sqli'],
      attackParamLocations: [AttackParamLocation.PATH]
    })
    .setFailFast(false)
    .timeout(timeout)
    .run({
      method: HttpMethod.DELETE,
      url: `${baseUrl}/boards/456/tasks/789`,
      headers: { 'Content-Type': 'application/json' }
    });
});
