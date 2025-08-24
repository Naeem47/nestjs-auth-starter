import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorResponse } from '../types/response.type';
import { Reflector } from '@nestjs/core';
import { ERROR_MESSAGE_KEY } from '../decorators/error-message.decorator';


@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly reflector: Reflector) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const executionContext = host.switchToHttp().getNext<unknown>() as any;
    const handler =
      (host as any).getHandler?.() ??
      (executionContext?.getHandler ? executionContext.getHandler() : null);

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res: any = exception.getResponse();
      message = res.message || exception.message;
    }

    const customMessage =
      handler && this.reflector.get<string>(ERROR_MESSAGE_KEY, handler);

    const errorResponse: ErrorResponse = {
      success: false,
      message: customMessage || message,
      errors: exception instanceof Error ? exception.stack : undefined,
    };

    response.status(status).json(errorResponse);
  }
}
