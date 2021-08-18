import 'reflect-metadata';
import { MetadataKey } from './MetadataKeys';

export function validateBody(...keys: string[]) {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    Reflect.defineMetadata(MetadataKey.validator, keys, target, key);
  };
}
