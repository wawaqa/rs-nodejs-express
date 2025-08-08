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

test('PUT /boards/:id', { signal: AbortSignal.timeout(timeout) }, async () => {
  await runner
    .createScan({
      tests: ['bopla', 'sqli', 'xss', 'csrf', 'id_enumeration'],
      attackParamLocations: [AttackParamLocation.BODY, AttackParamLocation.HEADER, AttackParamLocation.PATH],
      starMetadata: {}
    })
    .setFailFast(false)
    .timeout(timeout)
    .run({
      method: HttpMethod.PUT,
      url: `${baseUrl}/boards/123e4567-e89b-12d3-a456-426614174000`,
      body: {
        title: 'Updated Board Title',
        columns: [
          {
            id: 'column-uuid-1',
            title: 'Updated Column Title',
            order: 1
          }
        ]
      },
      headers: { 'Authorization': 'Bearer <your-token-here>', 'Content-Type': 'application/json' }
    });
});