import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKey } from './MetadataKeys';

export function Use(
  middleware: RequestHandler
): (target: any, key: string, desc: PropertyDescriptor) => void {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    const middlewares = Reflect.getMetadata(MetadataKey.middleware, target, key) || [];
    // middlewares.push(middleware);

    Reflect.defineMetadata(MetadataKey.middleware, [...middlewares, middleware], target, key);
  };
}
