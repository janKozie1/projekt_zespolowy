import type { FunctionComponent } from 'react';

import type { Location } from 'react-router';
import {
  generatePath as rrGeneratePath,
} from 'react-router';

import type { AnyRoutesConfig } from '../hooks/useRoutes';

import type { Nullable, ObjectValues } from './types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type EmptyParams = Readonly<{}>;

type PathsShape = Record<string, string>;
type ExtractParam<T extends string, ParamsType> = T extends `:${infer Param}?`
  ? Partial<Record<Param, ParamsType>>
  : T extends `:${infer Param}`
    ? Record<Param, ParamsType>
    : EmptyParams;

export type PathParams<T extends string, U = EmptyParams, ParamsType = string> =
T extends `/${infer A}/${infer B}`
  ? PathParams<`/${B}`, ExtractParam<A, ParamsType> & U, ParamsType>
  : T extends `/${infer A}`
    ? ExtractParam<A, ParamsType> & U
    : U;

export type RenderProps<Path extends string> = PathParams<Path> & Readonly<{
  location: Location;
  params: PathParams<Path>;
}>;

export type RouteConfig<Path extends string> = Readonly<{
  render: FunctionComponent<RenderProps<Path>>;
  reusePath?: Nullable<string>;
}>;

export type WrapRoutes<T extends PathsShape> = Readonly<{
  paths: T;
}>;

export type RoutesConfigObjectShape = Readonly<{
  paths: PathsShape;
}>;

export type RoutesConfig<Routes extends RoutesConfigObjectShape> = Readonly<{
  paths: Readonly<{
    [path in ObjectValues<Routes['paths']>]: RouteConfig<path>;
  }>;
}>;

export type RoutesToRoutesParams<Routes extends PathsShape> = {
  [path in keyof Routes]: PathParams<Routes[path]>
};

export const generatePath = <T extends string>(
  path: T, params?: PathParams<T, EmptyParams, number | string>,
): string => rrGeneratePath(path as string, params);

export const mergeConfigs = (
  configA: AnyRoutesConfig, configB: AnyRoutesConfig,
): RoutesConfig<RoutesConfigObjectShape> => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  paths: {
    ...configA.paths,
    ...configB.paths,
  },
});

type HasOptionalParams<T extends string> = T extends `${string}?${string}` ? true : false;

type AddOptionalPaths<T extends PathsShape> = Readonly<{
  [key in keyof T as HasOptionalParams<T[key]> extends true ? `${key & string}__NO_OPTIONALS` | `${key & string}` : key]: T[key];
}>;

type TrimOptionals<T extends string, SoFar extends string = ''> = T extends `/${infer A}/${infer B}`
  ? A extends `:${string}?`
    ? SoFar
    : TrimOptionals<`/${B}`, `${SoFar}/${A}`>
  : T extends `/${infer A}`
    ? A extends `:${string}?`
      ? SoFar
      : `${SoFar}/${A}`
    : never;

type RemoveOptionals<T extends string> = T extends `${infer A}?${infer B}`
  ? RemoveOptionals<`${A}${B}`>
  : T;

type SeparteOptionals<T> = T extends PathsShape ? Readonly<{
  [key in keyof T]: key extends `${string}__NO_OPTIONALS` ? TrimOptionals<T[key] & string> : RemoveOptionals<T[key]>;
}> : never;

const removeOptionalPathFragment = (path: string): string => {
  const fragments = path.replace(/^\//, '').split('/');

  const { parsedPath } = fragments.reduce((acc, curr) => {
    if (curr.includes(':') && curr.includes('?')) {
      acc.shouldIgnoreRest = true;
    } else {
      acc.parsedPath = `${acc.parsedPath}/${curr}`;
    }

    return acc;
  }, { shouldIgnoreRest: false, parsedPath: '' });

  return parsedPath;
};

export const separateOptionalPaths = <T extends PathsShape>(
  pathsConfig: T,
): SeparteOptionals<AddOptionalPaths<T>> => {
  const pathsWithOptionals = Object.values(pathsConfig).filter((path) => path.includes('?'));

  return Object.fromEntries(Object.entries(pathsConfig).flatMap(([pathName, path]) => {
    if (pathsWithOptionals.includes(path)) {
      const parsedPath = removeOptionalPathFragment(path);

      return [[pathName, path.replace(/\?/g, '')], [`${pathName}__NO_OPTIONALS`, parsedPath]] as const;
    }

    return [[pathName, path]] as const;
  })) as SeparteOptionals<AddOptionalPaths<T>>;
};
