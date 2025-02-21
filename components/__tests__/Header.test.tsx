import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import {Header} from '../Header';

test('HeaderTest', () => {
  const title = 'Est Lorem aute ex voluptate commodo proident ex dolor do magna tempor deserunt sit laboris.';
  render(<Header title={title} />);
  expect(screen.getByRole('heading', {name: title})).toBeDefined();
});
