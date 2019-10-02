function whatNumberIsIt(number) {
  const baseStr = 'Input number is ';
  const numberTypes = {
    [Number.MAX_VALUE]: 'Number.MAX_VALUE',
    [Number.POSITIVE_INFINITY]: 'Number.POSITIVE_INFINITY',
    [Number.MIN_VALUE]: 'Number.MIN_VALUE',
    [Number.NEGATIVE_INFINITY]: 'Number.NEGATIVE_INFINITY',
  }
  if (numberTypes[number]) {
    return baseStr + numberTypes[number];
  }
  if (isNaN(n)) {
    return baseStr + 'Number.NaN';
  }
  return baseStr + number;
}