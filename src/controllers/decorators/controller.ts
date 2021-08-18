import 'reflect-metadata';
import { AppRouter } from '../../AppRoute';
import { Methods } from './Methods';

export function Controller(routePrefix: string) {
  return (target: Function): void => {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata('path', target.prototype, key);
      const method: Methods = Reflect.getMetadata('method', target.prototype, key);

      if (path) {
        if (method === 'get') router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
