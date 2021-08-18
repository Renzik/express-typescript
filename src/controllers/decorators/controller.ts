import { NextFunction, RequestHandler, Request, Response } from 'express';
import 'reflect-metadata';
import { AppRouter } from '../../AppRoute';
import { MetadataKey } from './MetadataKeys';
import { Methods } from './Methods';

const validateBody = (keys: string[]): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`missing ${key}`);
        return;
      }
    }

    next();
  };
};

export function Controller(routePrefix: string) {
  return (target: Function): void => {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path: string = Reflect.getMetadata(MetadataKey.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKey.method, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKey.middleware, target.prototype, key) || [];
      const requiredBodyProps =
        Reflect.getMetadata(MetadataKey.validator, target.prototype, key) || [];

      const validator = validateBody(requiredBodyProps);

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  };
}
