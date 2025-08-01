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

test('PUT /boards/123/tasks/456', { signal: AbortSignal.timeout(timeout) }, async () => {
  await runner
    .createScan({
      tests: ['bopla', 'id_enumeration', 'xss', 'sqli', 'csrf'],
      attackParamLocations: [AttackParamLocation.BODY, AttackParamLocation.PATH]
    })
    .setFailFast(false)
    .timeout(timeout)
    .run({
      method: HttpMethod.PUT,
      url: `${baseUrl}/boards/123/tasks/456`,
      body: {
        title: 'Updated Task Title',
        description: 'Updated description.'
      },
      headers: { 'Content-Type': 'application/json' }
    });
});
