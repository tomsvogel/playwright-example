import {expect, test} from 'vitest';
import {sum} from '../calculationHelpers';

test('SumTest', () => {
  const result = sum(3, 2);
  expect(result).toBe(5);
});
