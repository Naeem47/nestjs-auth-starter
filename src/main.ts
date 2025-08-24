import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  const reflector = app.get(Reflector);
  app.useGlobalFilters(new AllExceptionsFilter(reflector));
  app.useGlobalInterceptors(new ResponseInterceptor(reflector));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
