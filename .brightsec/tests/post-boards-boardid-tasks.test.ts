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

test('POST /boards/:boardId/tasks', { signal: AbortSignal.timeout(timeout) }, async () => {
  await runner
    .createScan({
      tests: ['bopla', 'csrf', 'jwt', 'sqli', 'xss'],
      attackParamLocations: [AttackParamLocation.BODY, AttackParamLocation.HEADER],
      starMetadata: {}
    })
    .setFailFast(false)
    .timeout(timeout)
    .run({
      method: HttpMethod.POST,
      url: `${baseUrl}/boards/123e4567-e89b-12d3-a456-426614174001/tasks/`,
      body: {
        title: 'Sample Task',
        order: 1,
        description: 'This is a sample task description.',
        userId: '123e4567-e89b-12d3-a456-426614174000',
        boardId: '123e4567-e89b-12d3-a456-426614174001',
        columnId: '123e4567-e89b-12d3-a456-426614174002'
      },
      headers: { 'Authorization': 'Bearer <JWT_TOKEN>', 'Content-Type': 'application/json' }
    });
});
