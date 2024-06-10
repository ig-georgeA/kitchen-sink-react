import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import GridAndTreeGrid from './grid-and-tree-grid';
import 'element-internals-polyfill';

test('renders GridAndTreeGrid component', () => {
  const wrapper = render(<GridAndTreeGrid />);
  expect(wrapper).toBeTruthy();
});