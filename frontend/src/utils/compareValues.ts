import deburr from 'lodash/deburr';
import isDate from 'lodash/isDate';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import { DateTime } from 'luxon';

export enum Change {
  greater = 'greater',
  smaller = 'smaller',
  unknown = 'unknown',
  none = 'none',
}

type ComparisonFN<ValueToCompare = unknown> = (
  input: ComparisonResult<ValueToCompare>) => ComparisonResult<ValueToCompare>;
type ComparisonResult<ValueToCompare = unknown> = Readonly<{
  previousValue?: ValueToCompare;
  currentValue?: ValueToCompare;
  change: Change | null;
}>;

const shouldNoop = (input: ComparisonResult): boolean => input.change !== null;

const updateInput = <ValueToCompare = unknown>(
  input: ComparisonResult<ValueToCompare>,
  detectedChange: Change,
): ComparisonResult<ValueToCompare> => ({
    ...input,
    change: detectedChange,
  });

export const castString = <ValueToCompare>(
  value: ValueToCompare): Date | ValueToCompare | number | string | null => {
  if (isString(value)) {
    const parsedValue = deburr(value.trim());

    // treat empty strings as nil values
    if (parsedValue === '') {
      return null;
    }

    // assume that string consisting only of numbers, whitespace and
    // a decimal separator represents a number
    if (/^-?\d+([,.]\d+)?$/.test(parsedValue.replace(/(\d)\s+/g, '$1'))) {
      const numericValue = Number(parsedValue.replace(/\s/g, '').replace(',', '.'));

      if (Number.isNaN(numericValue)) {
        return null;
      }

      return numericValue;
    }

    // assume that string represents a date only if its the same as its iso date / datetime
    // This ideally would be just .valid but DateTime.fromISO()
    if (DateTime.fromISO(value).isValid) {
      return new Date(value);
    }
  }

  return value;
};

export const compareNullable: ComparisonFN = (input) => {
  if (shouldNoop(input)) {
    return input;
  }

  if (isNil(input.previousValue) && isNil(input.currentValue)) {
    return updateInput(input, Change.none);
  }

  if (isNil(input.previousValue) || isNil(input.currentValue)) {
    return updateInput(input, Change.unknown);
  }

  return input;
};

export const compareNumbers: ComparisonFN = (input) => {
  if (shouldNoop(input)) {
    return input;
  }

  if (isNumber(input.previousValue) && isNumber(input.currentValue)) {
    if (Number.isNaN(input.previousValue) || Number.isNaN(input.currentValue)) {
      return updateInput(input, Change.unknown);
    }

    if (input.previousValue < input.currentValue) {
      return updateInput(input, Change.greater);
    }

    if (input.previousValue > input.currentValue) {
      return updateInput(input, Change.smaller);
    }

    return updateInput(input, Change.none);
  }

  return input;
};

export const compareStrings: ComparisonFN = (input) => {
  if (shouldNoop(input)) {
    return input;
  }

  if (isString(input.previousValue) && isString(input.currentValue)) {
    if (input.previousValue !== input.currentValue) {
      return updateInput(input, Change.unknown);
    }

    return updateInput(input, Change.none);
  }

  return input;
};

export const compareDates: ComparisonFN = (input) => {
  if (shouldNoop(input)) {
    return input;
  }

  if (isDate(input.previousValue) && isDate(input.currentValue)) {
    const prevDateTime = DateTime.fromJSDate(input.previousValue);
    const currentDateTime = DateTime.fromJSDate(input.currentValue);
    const bothDatesAreValid = prevDateTime.isValid
     && currentDateTime.isValid;

    if (!bothDatesAreValid) {
      return updateInput(input, Change.unknown);
    }

    if (currentDateTime.hasSame(prevDateTime, 'day')) {
      return updateInput(input, Change.none);
    }

    if (input.previousValue < input.currentValue) {
      return updateInput(input, Change.greater);
    }

    if (input.previousValue > input.currentValue) {
      return updateInput(input, Change.smaller);
    }

    return updateInput(input, Change.none);
  }

  return input;
};

export const compareMixed: ComparisonFN = (input) => {
  if (shouldNoop(input)) {
    return input;
  }

  if (input.currentValue === input.previousValue) {
    return updateInput(input, Change.none);
  }

  return updateInput(input, Change.unknown);
};

export const defaultComparisonFNs = [
  compareNullable,
  compareNumbers,
  compareStrings,
  compareDates,
  compareMixed,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
] as ComparisonFN<any>[];

const compareValues = <ValueToCompare>(
  previousValue?: ValueToCompare,
  currentValue?: ValueToCompare,
  comparisonFNs: ComparisonFN<ValueToCompare>[] = defaultComparisonFNs,
): Change => {
  const result = comparisonFNs.reduce<ComparisonResult<ValueToCompare>>((
    previousComparisonResult,
    comparisonFN,
  ) => comparisonFN(previousComparisonResult), {
    change: null,
    previousValue,
    currentValue,
  });

  return result.change ?? Change.unknown;
};

export default compareValues;
