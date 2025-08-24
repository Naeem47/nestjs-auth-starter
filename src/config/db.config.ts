import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../modules/user/entities/user.entity';

export const databaseConfig = (configService: ConfigService): DataSourceOptions => ({
    type: 'postgres',
    host: configService.get<string>('DB_HOST', 'localhost'),
    port: configService.get<number>('DB_PORT', 5432),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: [User],
    synchronize: configService.get<boolean>('DB_SYNC', true),
    logging: configService.get<boolean>('DB_LOGGING', false),
});
