import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SuccessResponse } from '../types/response.type';
import { SUCCESS_MESSAGE_KEY } from '../decorators/success-message.decorator';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, SuccessResponse<T>> {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<SuccessResponse<T>> {
    const customMessage =
      this.reflector.get<string>(SUCCESS_MESSAGE_KEY, context.getHandler()) ||
      'Request successful';

    return next.handle().pipe(
      map((data) => {
        const response: SuccessResponse<T> = {
          success: true,
          message: customMessage,
          data,
        };
        return response;
      }),
    );
  }
}
