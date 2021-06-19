import "reflect-metadata";
import { getConnection, createConnection } from 'typeorm';
import typeOrmConfig from '../../ormconfig';

const connectToDb = async (): Promise<void> => {
  await createConnection(typeOrmConfig)
  // TODO try-catch block
  const connection = getConnection();

  if (connection) {
    if (!connection.isConnected) await connection.connect();
  }
};

export const tryConnectToDb = async (callback: () => void): Promise<void> => {
  try {
    await connectToDb();
    callback();
  } catch (error) {
    console.error(`Error when connecting to DB: ${error}`);
  }
};
