import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import PivotGrid from './pivot-grid';
import 'element-internals-polyfill';

test('renders PivotGrid component', () => {
  const wrapper = render(<PivotGrid />);
  expect(wrapper).toBeTruthy();
});