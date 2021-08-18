import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKey } from './MetadataKeys';
import { Methods } from './Methods';

interface RouteHandlerDesc extends PropertyDescriptor {
  value?: RequestHandler;
}

const routeBinder = (method: string) => {
  return (path: string): ((target: any, key: string, desc: RouteHandlerDesc) => void) => {
    return (target: any, key: string, desc: RouteHandlerDesc): void => {
      Reflect.defineMetadata(MetadataKey.path, path, target, key);
      Reflect.defineMetadata(MetadataKey.method, method, target, key);
    };
  };
};

export const Get = routeBinder(Methods.get);
export const Post = routeBinder(Methods.post);
export const Put = routeBinder(Methods.put);
export const Del = routeBinder(Methods.del);
export const Patch = routeBinder(Methods.patch);
