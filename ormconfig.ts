import { ConnectionOptions } from 'typeorm';
import config from './src/common/config';

const typeOrmConfig = {
  name: 'default',
  type: 'postgres',
  host: config.POSTGRES_HOST,
  port: config.POSTGRES_PORT,
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
  synchronize: true,
  logging: false,
  // entities: ['src/entity/**/*.ts'],
  // migrations: ['src/migration/**/*.ts'],
  // subscribers: ['src/subscriber/**/*.ts'],
} as ConnectionOptions;
export default typeOrmConfig;
