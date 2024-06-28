import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';
import { writeFileSync } from 'fs';

import { Environment } from 'src/common/enum';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

async function createOrmConfigFile(dbConfig: PostgresConnectionOptions) {
  const path = join(__dirname, '../../');
  writeFileSync(path + 'ormconfig.json', JSON.stringify(dbConfig, null, 2));
}

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const isDevelopmentEnv = config.get('NODE_ENV') !== Environment.Production;

    const dbConfig = {
      type: config.get('DB_TYPE'),
      host: config.get('DB_HOST'),
      port: +config.get('DB_PORT'), //^ el + lo castea a number
      username: config.get('DB_USER'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: isDevelopmentEnv,
      migrations: ['dist/database/migrations/*.js'],
      entities: ['dist/**/*.entity.js'],
      cli: {
        migrationsDir: 'src/database/migrations',
      },
      logging: config.get('DB_LOGGING'),
    } as PostgresConnectionOptions;

    if (isDevelopmentEnv) {
      createOrmConfigFile(dbConfig);
    }

    return dbConfig;
  },
});
