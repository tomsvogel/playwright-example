import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import {List} from '../List';

test('HeaderTest', () => {
  render(<List />);
  expect(screen.getByTestId('list').getElementsByTagName('div').length).equals(5);
});

await new Promise((r) => setTimeout(r, 2000));
