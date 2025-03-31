import { Dialect } from 'sequelize';
import { ServerConfig } from './server.config';

export const databaseConfig = {
  development: {
    username: ServerConfig.POSTGRES_USERNAME,
    password: ServerConfig.POSTGRES_PASSWORD,
    database: ServerConfig.POSTGRES_DB,
    host: ServerConfig.POSTGRES_HOST,
    port: parseInt(ServerConfig.POSTGRES_PORT),
    dialect: 'postgres' as Dialect,
    logging: console.log,
  },
};
