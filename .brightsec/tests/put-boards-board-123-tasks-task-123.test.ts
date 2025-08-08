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

test('PUT /boards/board-123/tasks/task-123', { signal: AbortSignal.timeout(timeout) }, async () => {
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
      url: `${baseUrl}/boards/board-123/tasks/task-123`,
      body: {
        title: 'Updated Task Title',
        order: 1,
        description: 'Updated description',
        userId: 'user-123',
        boardId: 'board-123',
        columnId: 'column-123'
      },
      headers: { 'Authorization': 'Bearer <token>', 'Content-Type': 'application/json' }
    });
});
