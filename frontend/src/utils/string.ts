import { isEmpty } from './guards';

type WithNamePrefixReturnType<
  Prefix extends string | undefined, FieldName extends string,
  > = string extends Prefix
    ? `${FieldName}`
    : undefined extends Prefix
      ? `${FieldName}`
      : `${Prefix}.${FieldName}`;

export const withNamePrefix = <Prefix extends string | undefined, FieldName extends string>(
  prefix: Prefix, name: FieldName,
): WithNamePrefixReturnType<Prefix, FieldName> => (
    !isEmpty(prefix)
      ? `${prefix ?? ''}.${name}` : `${name}`
  ) as WithNamePrefixReturnType<Prefix, FieldName>;

export const trimToLength = (content: string, maxLength: number): string => {
  if (content.length > maxLength) {
    return `${content.slice(0, maxLength)}...`;
  }

  return content;
};

export default {};
