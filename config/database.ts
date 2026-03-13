import path from 'path';
import type { Core } from '@strapi/strapi';
import { parse } from 'pg-connection-string';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Database => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  if (client === 'postgres') {
    const parsedConfig = parse(env('DATABASE_URL'));
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: parsedConfig.host || '',
          port: parsedConfig.port ? Number(parsedConfig.port) : 5432,
          database: parsedConfig.database || '',
          user: parsedConfig.user || '',
          password: parsedConfig.password || '',
          ssl: { rejectUnauthorized: false },
        },
        debug: false,
      },
    };
  }

  // Fallback to SQLite
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      } as any,
      useNullAsDefault: true,
    },
  };
};

export default config;
