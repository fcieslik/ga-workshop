import { it, expect } from 'vitest';
import { add } from './math';

it('should work', () => {
  expect(add(2, 3)).toBeCloseTo(5);
});
