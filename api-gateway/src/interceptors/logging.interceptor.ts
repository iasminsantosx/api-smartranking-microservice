import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Logger } from '@nestjs/common';
import { tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  logger = new Logger(LoggingInterceptor.name);
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    this.logger.debug('Antes...');
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => this.logger.debug(`Depois ... ${Date.now() - now}ms`)));
  }
}
