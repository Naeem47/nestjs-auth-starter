import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app): void {
  const config = new DocumentBuilder()
    .setTitle('NestJS Boilerplate API 🚀')
    .setDescription(
      'A scalable production-ready boilerplate with Auth (JWT + OTP), Mailer, Role-based Access, and PostgreSQL + TypeORM.'
    )
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token', // unique name
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'NestJS Boilerplate Docs 🚀',
  });
}
